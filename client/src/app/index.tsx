import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("@BarberGo:firstLaunch");
        if (value === "false") {
          await AsyncStorage.setItem("@BarberGo:firstLaunch", "true");
          setIsFirstTime(true);
        }
      } catch (error) {
        console.error("Erro ao verificar primeira execução:", error);
      }
    })();
  }, []);

  return (
    <Redirect
      href={!isFirstTime ? "/pages/locationPermission" : "/(tabs)/home"}
    />
  );
}
