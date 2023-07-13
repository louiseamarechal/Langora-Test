import * as Device from "expo-device";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../colors";

const DeviceName = () => {
  const [deviceName, setDeviceName] = useState("");

  useEffect(() => {
    try {
      const name = Device.deviceName;
      if (name === null) {
        setDeviceName("Web");
      } else {
        setDeviceName(name);
      }
    } catch (error) {
      console.log("Error getting device name:", error);
    }
  }, []);

  return (
    <View>
      <Text style={styles.text}>{deviceName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Rubik-SemiBold",
    fontSize: 21,
    color: colors.black,
  },
});
export default DeviceName;
