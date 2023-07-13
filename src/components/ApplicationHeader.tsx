import {
  faBatteryFull,
  faWifi,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ApplicationHeader = () => {
  const date = new Date().toString();
  const splittedDate = date.split(" ");
  const time = splittedDate[4].split(":");

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {time[0]}:{time[1]}
      </Text>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faSignal} size={20} />
        <FontAwesomeIcon icon={faWifi} size={20} />
        <FontAwesomeIcon icon={faBatteryFull} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "7%",
    paddingRight: "2%",
  },
  time: {
    fontWeight: "600",
    fontSize: 15,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default ApplicationHeader;
