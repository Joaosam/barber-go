import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import colors from "@/app/styles/colors";
import styles from "./styles";
import CardConfirmation from "@/app/components/cardConfirmation";

export default function BookingConfirmation() {
  const router = useRouter();
  const { serviceName, barbershopName, date, time, price } =
    useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate processing time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCalendar = () => {
    // This would integrate with Google Calendar API
    console.log("Adding to Google Calendar...");
    alert("Evento adicionado ao Google Calendário!");
  };

  const goToAppointments = () => {
    router.replace("/(tabs)/home");
    setTimeout(() => {
      router.replace("/(tabs)/appointments");
    }, 100);
  };

  const goToHome = () => {
    router.replace("/(tabs)/home");
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.purple.primary} />
        <Text style={styles.loadingText}>Processando sua reserva...</Text>
        <Text style={styles.loadingSubtext}>
          Aguarde enquanto confirmamos seu agendamento
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToHome} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.successIcon}>
          <Feather
            name="check-circle"
            size={80}
            color={colors.purple.primary}
          />
        </View>

        <Text style={styles.successTitle}>Reserva Confirmada!</Text>
        <Text style={styles.successSubtitle}>
          Seu agendamento foi realizado com sucesso.
        </Text>

        <View style={styles.cardContainer}>
          <CardConfirmation
            serviceName={serviceName as string}
            barbershopName={barbershopName as string}
            time={time as string}
            date={date ? Number(date) : undefined}
            price={price ? Number(price) : undefined}
          />

          <TouchableOpacity
            style={styles.calendarButton}
            onPress={handleAddToCalendar}
            activeOpacity={0.8}
          >
            <Feather name="calendar" size={20} color={colors.white} />
            <Text style={styles.calendarButtonText}>
              Adicionar no calendário
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.appointmentsButton}
            onPress={goToAppointments}
            activeOpacity={0.8}
          >
            <Text style={styles.appointmentsButtonText}>
              Ver Meus Agendamentos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
