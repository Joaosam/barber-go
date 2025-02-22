import { View, Text, ScrollView } from "react-native";
import BookingItem from "../bookingItem";
import styles from "./styles";

interface ImageScrollerProps {
  readonly title: string;
  readonly images: string[];
}

export default function ImageScroller({ title, images }: ImageScrollerProps) {
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
          {images.map((imageUrl, index) => (
            <BookingItem key={index} imageUrl={imageUrl} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
