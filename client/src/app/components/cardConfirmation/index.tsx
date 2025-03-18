import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { formatDate } from "@/utils/formatDate";

interface CardConfirmationProps {
  readonly serviceName?: string;
  readonly price?: number;
  readonly date?: number;
  readonly time: string;
  readonly barbershopName?: string;
}

export default function CardConfirmation({
  serviceName,
  price,
  date,
  time,
  barbershopName,
}: CardConfirmationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{serviceName}</Text>
        <Text style={[styles.value, { fontWeight: "bold" }]}>
          R$ {price?.toFixed(2).replace(".", ",")}
        </Text>
      </View>

      {!!date && (
        <View style={styles.row}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.value}>{formatDate(date)}</Text>
        </View>
      )}

      {!!time && (
        <View style={styles.row}>
          <Text style={styles.label}>Horário</Text>
          <Text style={styles.value}>{time}</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Barbearia</Text>
        <Text style={styles.value}>{barbershopName}</Text>
      </View>
    </View>
  );
}
