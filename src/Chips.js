import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

class Chips extends Component {
  state = {
    names: [
      {
        id: 0,
        name: "Tedhe Medhe"
      },
      {
        id: 1,
        name: "Bingo"
      },
      {
        id: 2,
        name: "No rulz"
      },
      {
        id: 3,
        name: "Mad Angle"
      },
      {
        id: 4,
        name: "No rulz curls"
      },
      {
        id: 5,
        name: "abc"
      },
      {
        id: 6,
        name: "def"
      }
    ]
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.state.names.map((item, index) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
export default Chips;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1"
  },
  text: {
    color: "#4f603c"
  }
});
