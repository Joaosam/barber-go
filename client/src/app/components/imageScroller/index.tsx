import { View, Text, ScrollView } from "react-native";
import BookingItem from "../bookingItem";
import styles from "./styles";

export interface barbershopProps {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  image: string;
}

interface ImageScrollerProps {
  readonly title: string;
  readonly barbershops: barbershopProps[];
}

export default function ImageScroller({
  title,
  barbershops,
}: ImageScrollerProps) {
  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.label}>{title}</Text>
      </View>

      <View style={{ height: 400, marginTop: -52 }}>
        <ScrollView
          contentContainerStyle={styles.wrapperBookingContent}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {barbershops.map((barbershop) => (
            <BookingItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
