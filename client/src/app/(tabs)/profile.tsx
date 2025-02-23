import colors from "@/app/styles/colors";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

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

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comece agora</Text>
        <Text style={styles.subtitle}>
          Crie uma conta ou faça login para agendar seus serviços.
        </Text>
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
          }}
          style={{ width: 24, height: 24 }}
        />
        <Text style={styles.googleButtonText}>Continuar com Google</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ou</Text>
        <View style={styles.separatorLine} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.gray[300]}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor={colors.gray[300]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={colors.gray[300]}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
