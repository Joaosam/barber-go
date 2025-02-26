import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@/app/styles/colors";
import { router } from "expo-router";
import { barbershopProps } from "../imageScroller";

interface BookingItemProps {
  readonly barbershop: barbershopProps;
}

export default function BookingItem({ barbershop }: BookingItemProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{ uri: barbershop.image }}
          style={styles.image}
          resizeMode="cover"
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
        <Text style={styles.name} numberOfLines={1}>
          {barbershop.name}
        </Text>
        <Text style={styles.caption}>
          {barbershop.address}, {barbershop.city}, {barbershop.state}
        </Text>
      </View>
      <Pressable
        style={styles.wrapperButton}
        onPress={() => router.push(`/(tabs)/home/(booking)/${barbershop.id}`)}
      >
        <Text style={styles.title}>Reservar</Text>
      </Pressable>
    </SafeAreaView>
  );
}
