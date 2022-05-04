import React from "react";
import PresentationalComponent from "./PresentationalComponent";
import { AppRegistry, View, ScrollView } from "react-native";
import Home from "./Home";
import Chips from "./Chips";
import ChipsImage from "./ChipsImage";
import Animations from "./Animations";
//import Routes from "./Routes";

export default class App extends React.Component {
  state = { myState: "Welcome to BuyEasy" };
  updateState = () => {
    this.setState({ myState: "Hello Rachita Singhal" });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <PresentationalComponent
            myState={this.state.myState}
            updateState={this.updateState}
          />
          <Home />
          <ChipsImage />
          <Chips />
          <Animations />
        </ScrollView>
      </View>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
