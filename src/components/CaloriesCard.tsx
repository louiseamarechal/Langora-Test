import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { colors } from "../colors";

const CaloriesCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Healthy Food</Text>
        <Text style={styles.text}>Keep you healthy life with healthy food</Text>
      </View>
      <View style={styles.calories}>
        <Text style={styles.caloriesCount}>538</Text>
        <Text style={styles.text}>kcal</Text>
      </View>
      <View style={styles.saladImg}>
        <Image
          source={require("./img/salad.png")}
          style={{ width: 160, height: 160 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: colors.pink,
    borderRadius: 12,
    height: "20%",
    width: "80%",
    paddingLeft: "5%",
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontFamily: "Rubik-SemiBold",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Rubik",
  },
  caloriesCount: {
    color: colors.white,
    fontSize: 32,
    fontFamily: "Rubik-SemiBold",
  },
  calories: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 5,
  },
  textContainer: {
    width: "75%",
    display: "flex",
    gap: 3,
  },
  saladImg: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "120%",
    height: "150%",
    position: "absolute",
  },
});

export default CaloriesCard;
