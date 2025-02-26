import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import ImageScroller from "@/app/components/imageScroller";
import colors from "@/app/styles/colors";
import styles from "./styles";
import { useBarbershop } from "@/api/queries/useBarbershop";

export default function Home() {
  const { data: barbershops = [] } = useBarbershop();

  const sections = [
    { title: "Recomendados", data: barbershops },
    { title: "Populares", data: [...barbershops].reverse() },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.title}>
            Olá, <Text style={{ fontWeight: "700" }}>Faça seu login!</Text>
          </Text>
          <Text style={styles.caption}>Sexta, 21 de Fevereiro</Text>
        </View>

        <View style={styles.wrapperFinder}>
          <TextInput
            style={styles.inputFind}
            placeholder="Buscar"
            placeholderTextColor={colors.gray[400]}
          />
          <Pressable style={styles.buttonFind}>
            <Feather name="search" size={22} color={colors.white} />
          </Pressable>
        </View>

        {sections.map((section, index) => (
          <ImageScroller
            key={index}
            title={section.title}
            barbershops={section.data}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
