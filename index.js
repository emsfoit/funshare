 

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { StackNavigator } from "react-navigation";
import SecondScreen from "./words";
import addwords from "./addwords";

const msword = props => {
  return <App navigation={props.navigation} />;
};

msword.navigationOptions = {
    header: null
};
SecondScreen.navigationOptions = {
    header: null
};
addwords.navigationOptions = {
  header: null
}
const SimpleApp = StackNavigator({
  Home: { screen: msword },
  ThirdScreen: {screen: addwords},
  SecondScreen: {screen: SecondScreen}
});

AppRegistry.registerComponent("msword", () => SimpleApp);