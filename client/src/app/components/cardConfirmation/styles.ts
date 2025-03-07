import { StyleSheet } from "react-native";
import colors from "@/app/styles/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black.secondary,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    color: colors.gray[400],
    fontSize: 16,
    marginBottom: 4,
  },
  value: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
});
