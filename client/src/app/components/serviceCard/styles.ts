import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  serviceCard: {
    backgroundColor: colors.black.secondary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray[100],
    padding: 16,
    paddingBottom: 0,
    marginBottom: 12,
  },
  serviceContent: {
    gap: 8,
    marginBottom: 16,
    flexDirection: "row",
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 12,
    gap: 8,
  },
  serviceName: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "700",
  },
  serviceDescription: {
    fontSize: 16,
    color: colors.gray[300],
  },
  servicePrice: {
    fontSize: 16,
    color: colors.purple.primary,
    fontWeight: "700",
  },
  bookButton: {
    backgroundColor: colors.gray[100],
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  serviceImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
});
