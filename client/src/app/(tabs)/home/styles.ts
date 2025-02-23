import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  wrapperTitle: {
    width: "100%",
    padding: 16,
    gap: 8,
    alignItems: "flex-start",
  },
  title: {
    color: colors.white,
    fontSize: 24,
  },
  caption: {
    color: colors.gray[400],
    fontSize: 16,
  },
  wrapperFinder: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputFind: {
    borderWidth: 1,
    borderColor: colors.gray[100],
    padding: 10,
    borderRadius: 8,
    color: colors.gray[400],
    fontSize: 16,
    flex: 1,
    backgroundColor: colors.black.secondary,
  },
  buttonFind: {
    backgroundColor: colors.purple.primary,
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
});

export default styles;
