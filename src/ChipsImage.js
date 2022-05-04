import React from "react";
import { StyleSheet, Image, View } from "react-native";

const ChipsImage = () => (
  <View style={styles.container}>
    <View style={styles.whitebox}>
      <Image
        source={require("../src/img/tedhe.jpeg")}
        style={{ width: 200, height: 200 }}
      />
    </View>
    <View style={styles.whitebox}>
      <Image
        source={require("../src/img/bingo.jpeg")}
        style={{ width: 200, height: 200 }}
      />
    </View>
    <View style={styles.whitebox}>
      <Image
        source={require("../src/img/norulz.jpeg")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  </View>
);
export default ChipsImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    height: 300
  },
  whiteboxbox: {
    width: 300,
    height: 80,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "skyblue"
  }
});
