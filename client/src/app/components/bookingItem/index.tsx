import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@/app/styles/colors";

interface BookingItemProps {
  readonly imageUrl: string;
}

export default function BookingItem({ imageUrl }: BookingItemProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.rating}>
          <MaterialCommunityIcons
            name="star"
            size={22}
            color={colors.purple.primary}
          />
          <Text style={styles.title}>5,0</Text>
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={styles.title}>Vintage Barber</Text>
        <Text style={styles.caption}>
          Avenida São Sebastião, 357, São Paulo
        </Text>
      </View>
      <Pressable style={styles.wrapperButton}>
        <Text style={styles.title}>Reservar</Text>
      </Pressable>
    </SafeAreaView>
  );
}
