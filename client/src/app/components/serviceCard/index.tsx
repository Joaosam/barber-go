import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { router } from "expo-router";

interface ServiceCardProps {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly imageUrl: string;
  readonly barberShopName?: string;
}

export default function ServiceCard({
  id,
  name,
  price,
  description,
  imageUrl,
  barberShopName,
}: ServiceCardProps) {
  return (
    <View style={styles.serviceCard}>
      <View style={styles.serviceContent}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.serviceImage}
          resizeMode="cover"
        />
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>{name}</Text>
          <Text style={styles.serviceDescription}>{description}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.servicePrice}>R$ {price.toFixed(2)}</Text>

            <Pressable
              style={styles.bookButton}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/home/(booking)/(services)/[id]",
                  params: { id, barberShopName },
                })
              }
            >
              <Text style={styles.bookButtonText}>Agendar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
