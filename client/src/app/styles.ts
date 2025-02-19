import { StyleSheet } from "react-native";
import colors from "./styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 24,
  },
});

export default styles;
