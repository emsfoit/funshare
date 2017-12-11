import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import App from "./App";
import SecondScreen from "./words";
import Addwords from "./addwords";
import Tinder from "./tinder";
import Home from "./home";
const msword = props => {
  return <App navigation={props.navigation} />;
};

msword.navigationOptions = {
    header: null
};
SecondScreen.navigationOptions = {
    header: null
};
Addwords.navigationOptions = {
  header: null
};
Tinder.navigationOptions = {
  header:null
}
const SimpleApp = StackNavigator({
  Home: {screen:Home},
  msword: { screen: msword },
  ThirdScreen: {screen: Addwords},
  SecondScreen: {screen: SecondScreen},
  Tinder: {screen: Tinder}
});

AppRegistry.registerComponent("msword", () => SimpleApp);