import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { services } from "../[id]";
import styles from "./styles";
import "@/constants/calendarLocale";
import colors from "@/app/styles/colors";
import { Feather } from "@expo/vector-icons";
import CardConfirmation from "@/app/components/cardConfirmation";

export default function Services() {
  const { id, barberShopName } = useLocalSearchParams();
  const router = useRouter();
  const service = services.find((service) => service.id === id);
  const [selectedDate, setSelectedDate] = useState<DateData>();
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const timeChips = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  function handleDateSelect(day: DateData) {
    setSelectedDate(day);
    setSelectedTime("");
  }

  function handleConfirmBooking() {
    // Navigate to the confirmation page instead of showing an alert
    router.push({
      pathname: "/(tabs)/home/(booking)/confirmation",
      params: {
        serviceName: service?.name,
        barbershopName: barberShopName,
        date: selectedDate?.timestamp,
        time: selectedTime,
        price: service?.price,
      },
    });
  }

  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
    setSelectedDate(undefined);
    setSelectedTime("");
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
    setSelectedDate(undefined);
    setSelectedTime("");
  };

  const renderHeader = (date: string) => {
    const dateObject = date ? new Date(date) : new Date();
    const month = dateObject.toLocaleString("pt-BR", { month: "long" });

    return (
      <View style={styles.calendarHeader}>
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {month.charAt(0).toUpperCase() + month.slice(1)}
        </Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TouchableOpacity
            style={styles.calendarArrowButton}
            onPress={goToPreviousMonth}
            activeOpacity={0.8}
          >
            <Feather name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.calendarArrowButton,
              { backgroundColor: colors.gray[100] },
            ]}
            onPress={goToNextMonth}
            activeOpacity={0.8}
          >
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Fazer Reserva</Text>
        <TouchableOpacity onPress={router.back}>
          <Feather name="x" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          key={currentMonth.toISOString()} // Force re-render when month changes
          current={currentMonth.toISOString()}
          minDate={new Date().toISOString()}
          onDayPress={handleDateSelect}
          hideArrows
          hideExtraDays
          renderHeader={renderHeader}
          markedDates={{
            [selectedDate?.dateString ?? ""]: {
              selected: true,
              selectedColor: colors.purple.primary,
            },
          }}
          theme={{
            calendarBackground: "transparent",
            textSectionTitleColor: colors.white,
            selectedDayBackgroundColor: colors.purple.primary,
            selectedDayTextColor: colors.white,
            todayTextColor: colors.white,
            dayTextColor: colors.white,
            textDayFontWeight: "bold",
            textDisabledColor: colors.gray[200],
            dotColor: colors.purple.primary,
            selectedDotColor: colors.white,
            arrowColor: colors.white,

            "stylesheet.calendar.header": {
              dayHeader: {
                color: colors.gray[400],
              },
            },
            "stylesheet.calendar.main": {
              week: {
                marginTop: 3,
                flexDirection: "row",
              },
            },
          }}
        />
      </View>

      {!!selectedDate && (
        <View style={styles.timeChipsSection}>
          <ScrollView
            contentContainerStyle={styles.timeSectionContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {timeChips.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeChip,
                  selectedTime === time && styles.timeChipSelected,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeChipText,
                    selectedTime === time && styles.timeChipTextSelected,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <View style={{ borderTopWidth: 1, borderColor: colors.gray[300] }}>
        <CardConfirmation
          serviceName={service?.name}
          price={service?.price}
          date={selectedDate?.timestamp}
          time={selectedTime}
          barbershopName={barberShopName as string}
        />

        <TouchableOpacity
          style={[
            styles.confirmButton,
            (!selectedDate || !selectedTime) && styles.confirmButtonDisabled,
          ]}
          onPress={handleConfirmBooking}
          disabled={!selectedDate || !selectedTime}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
