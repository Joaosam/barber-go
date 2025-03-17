import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import colors from "@/app/styles/colors";
import CardConfirmation from "@/app/components/cardConfirmation";
import styles from "./styles";

export default function ReservationDetails() {
  const router = useRouter();
  const { serviceName, barbershopName, date, time, price } =
    useLocalSearchParams();

  // Mock location for the barbershop
  // In a real app, this would come from the barbershop data
  const barbershopLocation = {
    latitude: -23.5505, // Example coordinates for São Paulo
    longitude: -46.6333,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const handleCancelReservation = () => {
    // Logic to cancel reservation would go here
    Alert.alert(
      "Confirmar o cancelamento?",
      `Você pode reagendar ou cancelar sua reserva a qualquer momento.`,
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          onPress: () => {
            router.replace("/(tabs)/appointments");
            console.log("Reserva cancelada!");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Informações da Reserva</Text>
        <TouchableOpacity onPress={router.back}>
          <Feather name="x" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={barbershopLocation}
            zoomEnabled
            scrollEnabled={false}
            userInterfaceStyle="dark"
          >
            <Marker
              coordinate={{
                latitude: barbershopLocation.latitude,
                longitude: barbershopLocation.longitude,
              }}
              title={barbershopName as string}
            />
          </MapView>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Confirmado</Text>
        </View>

        <CardConfirmation
          serviceName={serviceName as string}
          barbershopName={barbershopName as string}
          time={time as string}
          date={date ? Number(date) : undefined}
          price={price ? Number(price) : undefined}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.backButtonBottom}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancelReservation}
          >
            <Text style={styles.cancelButtonText}>Cancelar Reserva</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
