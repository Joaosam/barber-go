import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingBottom: 16,
  },
  headerImage: {
    flex: 1,
    height: 300,
    padding: 8,
  },
  headerInfo: {
    padding: 16,
  },
  headerDescription: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 44,
    zIndex: 2,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  barbershopName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
  },
  barbershopAddress: {
    fontSize: 16,
    color: colors.gray[400],
    marginTop: 4,
  },
  services: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.white,
  },
  serviceGrid: {
    gap: 16,
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBlock: 8,
    gap: 16,
    width: "70%",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: colors.black.secondary,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  activeTab: {
    backgroundColor: colors.purple.primary,
    borderColor: colors.purple.primary,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.white,
  },
  activeTabText: {
    color: colors.white,
    fontWeight: "bold",
  },
  infoText: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  infoSection: {
    backgroundColor: colors.black.secondary,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  infoTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoContent: {
    color: colors.gray[400],
    fontSize: 16,
    marginBottom: 4,
  },
});
