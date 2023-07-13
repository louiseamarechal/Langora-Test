// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import React, { useCallback, useEffect } from "react";

import RootStackParamList from "./src/dto/stack.dto";
import HomeScreen from "./src/pages/HomeScreen";
import OnBoardingScreen from "./src/pages/OnBoardingScreen";
import { View } from "react-native";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
  //       "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
  //     });
  //   };

  //   loadFonts();
  // }, []);

  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
  });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
