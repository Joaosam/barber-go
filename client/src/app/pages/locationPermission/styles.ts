import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.gray[200],
    marginBottom: 16,
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: colors.gray[300],
    marginBottom: 32,
    lineHeight: 24,
  },
  primaryButton: {
    width: "100%",
    backgroundColor: colors.purple.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBlock: 16,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors.gray[300],
    fontSize: 16,
  },
});
