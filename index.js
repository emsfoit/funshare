 

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { StackNavigator } from "react-navigation";
import SecondScreen from "./words";

const msword = props => {
  return <App navigation={props.navigation} />;
};

msword.navigationOptions = {
    header: null
};
SecondScreen.navigationOptions = {
    header: null
}
const SimpleApp = StackNavigator({
  Home: { screen: msword },
  SecondScreen: { screen: SecondScreen }
});

AppRegistry.registerComponent("msword", () => SimpleApp);