import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Platform } from "react-native";

import DisplayStars from "./DisplayStar";
import { colors } from "../colors";
import foodObj from "../dto/food.dto";

type foodProps = {
  foodData: foodObj;
};

const FoodCard = ({ foodData }: foodProps) => {
  const elevationStyle = Platform.select({
    android: {
      elevation: 10,
    },
  });
  const starsArray = [];

  for (let i = 0; i < foodData.rate; i++) {
    starsArray.push("./img/star.png");
  }
  return (
    <View style={[styles.foodContainer, elevationStyle]}>
      <View style={{ width: "100%", height: "60%" }}>
        <Image
          style={{
            width: undefined,
            height: "100%",
            borderRadius: 5,
          }}
          source={{
            uri: `${foodData.img}`,
          }}
          alt={"Fried Chicken"}
        />
        <View style={styles.stars}>
          {starsArray.map((star, key) => {
            return <DisplayStars key={key} />;
          })}
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{foodData.name}</Text>
        <Text style={styles.price}>{foodData.price} $</Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    borderRadius: 12,
    width: "22%",
    height: "100%",
  },
  textContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "5%",
    height: "40%",
  },
  text: {
    fontFamily: "Rubik-SemiBold",
    textAlign: "left",
    fontSize: 12,
    color: colors.black,
  },
  price: {
    fontFamily: "Rubik",
    fontSize: 11,
    color: colors.grey,
  },
  stars: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    height: "95%",
    position: "absolute",
  },
});
