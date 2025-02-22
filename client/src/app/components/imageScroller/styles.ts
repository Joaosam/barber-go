import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapperTitle: {
    width: "100%",
    padding: 16,
    alignItems: "flex-start",
  },
  label: {
    color: colors.gray[300],
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "700",
  },
  wrapperBookingContent: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    padding: 16,
  },
});

export default styles;
