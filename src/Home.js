import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
//import { Actions } from "react-native-router-flux";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redbox}>
        <TouchableOpacity>
          <Text style={styles.text}>Chips</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bluebox}>
        <Text style={styles.text}>Biscuits</Text>
      </View>
      <View style={styles.blackbox}>
        <Text style={styles.text}>Body Wash</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    height: 300
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Novella"
  },
  redbox: {
    width: 300,
    height: 80,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "white"
  },
  bluebox: {
    width: 300,
    height: 80,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "white"
  },
  blackbox: {
    width: 300,
    height: 80,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "white"
  }
});
