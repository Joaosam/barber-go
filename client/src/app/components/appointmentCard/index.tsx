import React, { useEffect, useRef } from "react";
import { Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "@/app/styles/colors";
import styles from "./styles";
import { AppointmentProps } from "@/app/(tabs)/appointments";

interface AppointmentCardProps {
  readonly appointment: {
    id: string;
    serviceName: string;
    barbershopName: string;
    barbershopImage: string;
    date: string;
    time: string;
    price: number;
    status: string;
  };
  readonly onPress: (appointment: AppointmentProps) => void;
}

export default function AppointmentCard({
  appointment,
  onPress,
}: AppointmentCardProps) {
  const isCompleted = appointment.status === "completed";
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const extractDateParts = (dateString: string) => {
    const parts = dateString.split(" ");
    return {
      day: parts[0],
      month: parts[1],
    };
  };

  const { day, month } = extractDateParts(appointment.date);

  // Animation for active cards only
  useEffect(() => {
    if (!isCompleted) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
          }),
          Animated.timing(pulseAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    }
  }, [isCompleted, pulseAnim]);

  return (
    <TouchableOpacity
      testID="appointment-card"
      style={[
        styles.appointmentCardTouchable,
        isCompleted && styles.completedCardTouchable,
      ]}
      onPress={() => onPress(appointment)}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles.appointmentCard,
          !isCompleted && {
            transform: [
              {
                scale: pulseAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 1.01, 1],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.appointmentLeftColumn}>
          <View
            style={[
              styles.statusContainer,
              isCompleted && styles.completedStatus,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                isCompleted && styles.completedStatusText,
              ]}
            >
              {isCompleted ? "Finalizado" : "Confirmado"}
            </Text>
          </View>
          <Text style={styles.serviceName}>{appointment.serviceName}</Text>
          <View style={styles.barbershopContainer}>
            <Image
              source={{ uri: appointment.barbershopImage }}
              style={styles.barbershopImage}
            />
            <Text style={styles.barbershopName}>
              {appointment.barbershopName}
            </Text>
          </View>
        </View>

        <View style={styles.appointmentRightColumn}>
          <Text style={styles.monthText}>{month}</Text>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.appointmentTime}>{appointment.time}</Text>

          {isCompleted && (
            <View style={styles.rateIndicator}>
              <Feather name="star" size={16} color={colors.purple.primary} />
              <Text style={styles.rateIndicatorText}>Avaliar</Text>
            </View>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
