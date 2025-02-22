import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black.secondary,
    borderWidth: 1,
    borderColor: colors.gray[100],
    borderRadius: 16,
    width: 180,
    color: colors.gray[400],
  },
  image: {
    width: 180,
    height: 160,
    borderRadius: 8,
    marginBlock: 8,
    paddingInline: 8,
    position: "relative",
  },
  rating: {
    position: "absolute",
    top: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    padding: 4,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    paddingInline: 8,
    fontWeight: "bold",
  },
  caption: {
    color: colors.gray[400],
    fontSize: 14,
    paddingInline: 8,
  },
  wrapperButton: {
    paddingBlock: 8,
    paddingInline: 16,
    width: "90%",
    backgroundColor: colors.gray[100],
    color: colors.white,
    borderRadius: 8,
    marginBlock: 16,
    marginInline: 8,
    alignItems: "center",
  },
});

export default styles;
