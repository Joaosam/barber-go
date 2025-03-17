import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import colors from "@/app/styles/colors";

export default function LocationPermission() {
  const router = useRouter();

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      await AsyncStorage.setItem("locationPermissionRequested", "true");

      if (status === "granted") {
        await AsyncStorage.setItem("locationPermissionGranted", "true");
      }
      router.replace("/(tabs)/home");
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error);
      router.replace("/(tabs)/home");
    }
  };

  const skipPermission = async () => {
    await AsyncStorage.setItem("locationPermissionRequested", "true");
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Feather name="map-pin" size={120} color={colors.gray[200]} />

        <Text style={styles.title}>Habilitar localização</Text>

        <Text style={styles.description}>
          Para oferecer as melhores barbearias próximas a você, precisamos
          acessar sua localização. Isso nos ajuda a recomendar estabelecimentos
          nas proximidades e melhorar sua experiência.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={requestLocationPermission}
        >
          <Text style={styles.primaryButtonText}>
            Permitir acesso à localização
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={skipPermission}
        >
          <Text style={styles.secondaryButtonText}>Pular por enquanto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
