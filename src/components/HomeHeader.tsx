import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import DeviceName from "./DeviceName";
import { colors } from "../colors";
import timeImages from "../dto/home.dto";

const HomeHeader = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [hour, setHour] = useState<number>(0);

  useEffect(() => {
    const date = new Date().toString();
    const splittedDate = date.split(" ");
    const time = splittedDate[4].split(":");
    setHour(parseInt(time[0], 10));

    if (hour >= 8 && hour <= 10) {
      setTimeOfDay("morning");
    } else if (hour > 10 && hour < 22) {
      setTimeOfDay("day");
    } else if (hour >= 22 && hour < 8) {
      setTimeOfDay("night");
    }
  });

  const images: timeImages = {
    morning: require("./img/morning.png"),
    day: require("./img/day.png"),
    night: require("./img/night.png"),
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.timeNotifContainer}>
        <View style={styles.timeContainer}>
          <Image source={images[timeOfDay]} style={{ width: 22, height: 22 }} />
          <Text style={{ color: colors.black }}>Good {timeOfDay}</Text>
        </View>
        <Image
          source={require("./img/fbell.png")}
          style={{ width: 22, height: 22 }}
        />
      </View>
      <View style={{ paddingLeft: "10%" }}>
        <DeviceName />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "10%",
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  timeNotifContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingLeft: "10%",
  },
});

export default HomeHeader;
