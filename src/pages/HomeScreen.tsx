import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { colors } from "../colors";
import CaloriesCard from "../components/CaloriesCard";
import FoodCards from "../components/FoodCards";
import HomeHeader from "../components/HomeHeader";
import RootStackParamList from "../dto/stack.dto";

type homeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: homeProps) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <CaloriesCard />
      <View style={styles.foodContainer}>
        <FoodCards foodType={"fried-chicken"} page={1} />
        <FoodCards foodType={"pizzas"} page={2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: "10%",
    width: "100%",
    gap: 10,
  },
  foodContainer: {
    height: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "2%",
    paddingRight: "9%",
    paddingLeft: "9%",
    gap: 10,
  }
});

export default HomeScreen;
