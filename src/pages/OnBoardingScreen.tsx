import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { colors } from "../colors";
import RootStackParamList from "../dto/stack.dto";

type onBoardingProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoarding">;
};

const OnBoardingScreen = ({ navigation }: onBoardingProps) => {
  const imageHumans = require("./img/Illus.png");
  const imageWave = require("./img/Wave.png");
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={styles.pinkContainer}>
        <View style={styles.imgTitleContainer}>
          <Text style={styles.title}>Healthy Food</Text>
          <Image source={imageHumans} style={{ width: "70%", height: "70%" }} />
        </View>
      </View>
      <Image source={imageWave} style={{ width: "100%" }} />
      <View style={styles.whiteContainer}>
        <Text style={styles.secondaryText}>
          Start your day off right with this healthy breakfast recipes
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pinkContainer: {
    height: "60%",
    backgroundColor: colors.pink,
  },
  imgTitleContainer: {
    paddingTop: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: "100%",
    width: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontFamily: "Rubik-SemiBold",
  },
  whiteContainer: {
    display: "flex",
    alignItems: "center",
    gap: 30,
    paddingBottom: "10%",
    justifyContent: "center",
    height: "35%",
  },
  secondaryText: {
    width: "80%",
    fontSize: 16,
    color: colors.grey,
    textAlign: "center",
    fontFamily: "Rubik",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.pink,
    width: "85%",
    height: "25%",
    borderRadius: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "Rubik-SemiBold",
    fontWeight: "600",
  },
});

export default OnBoardingScreen;
