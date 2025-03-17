import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import ImageScroller from "@/app/components/imageScroller";
import colors from "@/app/styles/colors";
import styles from "./styles";
import { useBarbershop } from "@/api/queries/useBarbershop";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

interface LocationProps {
  coords: {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  timestamp: number;
}

export default function Home() {
  const { data: barbershops = [] } = useBarbershop();
  const [location, setLocation] = useState({} as LocationProps);
  const [errorMsg, setErrorMsg] = useState("");

  const sections = [
    { title: "Recomendados", data: barbershops },
    { title: "Populares", data: [...barbershops].reverse() },
  ];

  useEffect(() => {
    (async () => {
      try {
        // Verificar se o usuário concedeu permissão
        const permissionGranted = await AsyncStorage.getItem(
          "locationPermissionGranted"
        );

        if (permissionGranted === "true") {
          // Obter a localização atual
          const currentLocation = (await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
          })) as LocationProps;
          setLocation(currentLocation);

          // TODO: filtrar barbearias próximas ou calcular distâncias
          const { latitude, longitude } = currentLocation.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } else {
          setErrorMsg("Permissão de localização não concedida");
        }
      } catch (error) {
        console.error("Erro ao obter localização:", error);
        setErrorMsg("Não foi possível obter a localização");
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.title}>
            Olá, <Text style={{ fontWeight: "700" }}>Faça seu login!</Text>
          </Text>
          <Text style={styles.caption}>
            {format(new Date(), "EE',' dd 'de' MMMM", {
              locale: ptBR,
            })}
          </Text>
        </View>

        <View style={styles.wrapperFinder}>
          <TextInput
            style={styles.inputFind}
            placeholder="Buscar"
            placeholderTextColor={colors.gray[400]}
          />
          <Pressable style={styles.buttonFind}>
            <Feather name="search" size={22} color={colors.white} />
          </Pressable>
        </View>

        {sections.map((section, index) => (
          <ImageScroller
            key={index}
            title={section.title}
            barbershops={section.data}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
