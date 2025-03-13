import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.black.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  header: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[100],
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  loadingText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 24,
    textAlign: "center",
  },
  loadingSubtext: {
    color: colors.gray[300],
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
    paddingHorizontal: 32,
  },
  successIcon: {
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  animationContainer: {
    width: 150,
    height: 150,
  },
  successTitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  successSubtitle: {
    color: colors.gray[300],
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  calendarButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple.primary,
    borderRadius: 8,
    padding: 16,
    width: "100%",
    marginTop: 16,
    marginBottom: 16,
  },
  calendarButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  appointmentsButton: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.gray[100],
    marginBottom: 16,
  },
  appointmentsButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  homeButton: {
    backgroundColor: colors.black.secondary,
  },
});
