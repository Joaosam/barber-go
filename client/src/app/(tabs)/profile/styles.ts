import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.black.primary,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 16,
    textAlign: "left",
    marginTop: 12,
  },
  input: {
    backgroundColor: colors.black.secondary,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: colors.white,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.purple.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  googleButtonText: {
    color: colors.black.primary,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray[300],
  },
  separatorText: {
    color: colors.gray[300],
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.black.secondary,
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    color: colors.white,
    fontSize: 16,
  },
  eyeButton: {
    padding: 15,
  },
});

export default styles;
