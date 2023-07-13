import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, ScrollView, View } from "react-native";
import { useQuery } from "react-query";

import FoodCard from "./FoodCard";
import { colors } from "../colors";
import foodObj from "../dto/food.dto";

type FoodCardsProps = {
  foodType: string;
  page: number;
};

const FoodCards = ({ foodType, page }: FoodCardsProps) => {
  async function fetchData(page: number, type: string) {
    const pageLimit = 5;
    const response = await fetch(
      `https://free-food-menus-api-production.up.railway.app/${type}?_page=${page}&_limit=${pageLimit}`,
    );

    return response.json();
  }

  const { data, status } = useQuery(["paginatedFoods", page], () =>
    fetchData(page, foodType),
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Favorite {foodType}</Text>
      <View style={{ width: "100%" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.foodCards}>
          {status === "success" && data ? (
            data.map((food: foodObj, key: number) => {
              return <FoodCard key={key} foodData={food} />;
            })
          ) : (
            <Text></Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    width: "100%",
    height: "45%",
  },
  title: {
    fontFamily: "Rubik-SemiBold",
    fontSize: 18,
    color: colors.black,
  },
  foodCards: {
    paddingLeft: "17%",
    paddingRight: "17%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default FoodCards;
