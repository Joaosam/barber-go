import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { useBarbershop } from "@/api/queries/useBarbershop";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@/app/styles/colors";
import ServiceCard from "@/app/components/serviceCard";

export const services = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Corte de Cabelo",
    description: "Estilo personalizado com as últimas tendências.",
    price: 60.0,
    imageUrl:
      "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Barba",
    description: "Modelagem completa para destacar sua masculinidade.",
    price: 40.0,
    imageUrl:
      "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Pézinho",
    description: "Acabamento perfeito para um visual renovado.",
    price: 35.0,
    imageUrl:
      "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Sobrancelha",
    description: "Expressão acentuada com modelagem precisa.",
    price: 20.0,
    imageUrl:
      "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Massagem",
    description: "Relaxe com uma massagem revigorante.",
    price: 50.0,
    imageUrl:
      "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    name: "Hidratação",
    description: "Hidratação profunda para cabelo e barba.",
    price: 25.0,
    imageUrl:
      "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
  },
];

export default function Booking() {
  const [activeTab, setActiveTab] = useState("services");
  const { id } = useLocalSearchParams();
  const { data: barbershops = [] } = useBarbershop();
  const barbershop = barbershops.find((b) => b.id === id);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: barbershop?.image }}
          style={styles.headerImage}
          resizeMode="cover"
        >
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={colors.white}
            />
          </Pressable>
        </ImageBackground>
        <View style={styles.headerInfo}>
          <Text style={styles.barbershopName}>{barbershop?.name}</Text>
          <View style={styles.headerDescription}>
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color={colors.purple.primary}
            />
            <Text style={styles.barbershopAddress}></Text>
            <Text style={styles.barbershopAddress}>
              {barbershop?.address}, {barbershop?.city}
            </Text>
          </View>
          <View style={[styles.headerDescription, { gap: 4 }]}>
            <MaterialCommunityIcons
              name="star"
              size={24}
              color={colors.purple.primary}
            />
            <Text style={styles.barbershopAddress}>5.0 (899 avaliações)</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Pressable
          style={[
            styles.tabButton,
            activeTab === "services" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("services")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "services" && styles.activeTabText,
            ]}
          >
            Serviços
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tabButton, activeTab === "info" && styles.activeTab]}
          onPress={() => setActiveTab("info")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "info" && styles.activeTabText,
            ]}
          >
            Informações
          </Text>
        </Pressable>
      </View>

      {activeTab === "services" ? (
        <View style={styles.services}>
          <View style={styles.serviceGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                price={service.price}
                description={service.description}
                imageUrl={service.imageUrl}
                barberShopName={barbershop?.name}
              />
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.services}>
          <Text style={styles.infoText}>
            {barbershop?.description ??
              "Seja bem-vindo à nossa barbearia! Oferecemos serviços de alta qualidade com profissionais experientes."}
          </Text>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Horário de Funcionamento</Text>
            <Text style={styles.infoContent}>Segunda à Sábado: 9h às 20h</Text>
            <Text style={styles.infoContent}>Domingo: Fechado</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
