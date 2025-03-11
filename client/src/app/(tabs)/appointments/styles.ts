import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
    paddingBlock: 24,
  },
  header: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: colors.gray[300],
    fontSize: 16,
    marginTop: 8,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 24,
  },
  sectionTitle: {
    color: colors.gray[300],
    fontSize: 16,
    fontWeight: "600",
    fontVariant: ["small-caps"],
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  emptyText: {
    color: colors.gray[300],
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;
