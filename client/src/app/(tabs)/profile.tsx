import colors from "@/app/styles/colors";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black.primary,
  },
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white, fontSize: 24 }}>PROFILE</Text>
    </View>
  );
}
