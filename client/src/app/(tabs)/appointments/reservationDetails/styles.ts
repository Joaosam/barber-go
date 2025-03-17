import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    paddingBlock: 20,
  },
  mapContainer: {
    marginBottom: 20,
  },
  map: {
    height: 300,
    borderRadius: 4,
    marginBottom: 8,
    paddingInline: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 16,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  backButtonBottom: {
    backgroundColor: colors.gray[100],
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
  },
  backButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.red.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  statusContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 99,
    backgroundColor: colors.purple.secondary,
    alignSelf: "flex-start",
    marginTop: 12,
    marginInline: 16,
  },
  statusText: {
    color: colors.purple.primary,
    fontWeight: "600",
  },
});
