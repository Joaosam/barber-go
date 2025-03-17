import { Text, View, ScrollView, Alert, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "@/app/styles/colors";
import styles from "./styles";
import AppointmentCard from "@/app/components/appointmentCard";
import { router } from "expo-router";

export interface AppointmentProps {
  readonly id: string;
  readonly serviceName: string;
  readonly barbershopName: string;
  readonly barbershopImage: string;
  readonly date: string;
  readonly time: string;
  readonly price: number;
  readonly status: string;
}

// Mock data for appointments
const upcomingAppointments = [
  {
    id: "1",
    serviceName: "Corte e Barba",
    barbershopName: "Barbearia Clássica",
    barbershopImage:
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    date: "05 Junho 2023",
    time: "11:30",
    price: 80.0,
    status: "confirmed",
  },
];

// Mock data for completed appointments
const completedAppointments = [
  {
    id: "3",
    serviceName: "Corte e Barba",
    barbershopName: "Barbearia Clássica",
    barbershopImage:
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    date: "05 Junho 2023",
    time: "11:30",
    price: 80.0,
    status: "completed",
  },
  {
    id: "4",
    serviceName: "Corte e Barba",
    barbershopName: "Barbearia Clássica",
    barbershopImage:
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    date: "05 Junho 2023",
    time: "11:30",
    price: 80.0,
    status: "completed",
  },
  {
    id: "5",
    serviceName: "Corte e Barba",
    barbershopName: "Barbearia Clássica",
    barbershopImage:
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    date: "05 Junho 2023",
    time: "11:30",
    price: 80.0,
    status: "completed",
  },
];

export default function Appointments() {
  const hasNoAppointments =
    upcomingAppointments.length === 0 && completedAppointments.length === 0;

  const handleAppointmentSubmit = (appointment: AppointmentProps) => {
    if (appointment.status === "confirmed") {
      router.push({
        pathname: "/(tabs)/appointments/reservationDetails",
        params: {
          serviceName: appointment.serviceName,
          barbershopName: appointment.barbershopName,
          date: 1742947200000,
          time: appointment.time,
          price: appointment.price.toString(),
        },
      });
    } else if (appointment.status === "completed") {
      // Navegar para a tela de avaliação
      Alert.alert(
        "Avaliar Serviço",
        `Conte-nos como foi sua experiência em ${appointment.barbershopName}`,
        [
          { text: "Depois", style: "cancel" },
          {
            text: "Avaliar Agora",
            onPress: () => console.log("Navegando para avaliação..."),
          },
        ]
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {hasNoAppointments ? (
        <View
          style={[
            styles.container,
            styles.emptyContainer,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Feather name="calendar" size={80} color={colors.gray[200]} />
          <Text
            style={[
              styles.emptyText,
              { textAlign: "center", marginTop: 16, paddingHorizontal: 24 },
            ]}
          >
            Você ainda não possui nenhum agendamento. Explore as barbearias
            disponíveis e faça seu primeiro agendamento!
          </Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Agendamentos</Text>
            <Text style={styles.headerSubtitle}>
              Confira seus agendamentos atuais e passados
            </Text>
          </View>

          {upcomingAppointments.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>CONFIRMADOS</Text>
              </View>
              {upcomingAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onPress={handleAppointmentSubmit}
                />
              ))}
            </>
          )}

          {completedAppointments.length > 0 && (
            <>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>FINALIZADOS</Text>
              </View>
              {completedAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onPress={handleAppointmentSubmit}
                />
              ))}
            </>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
