import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import App from "./src/pages/App";
import SecondScreen from "./src/pages/words";
import Addwords from "./src/pages/addwords";
import Tinder from "./src/pages/tinder";
import Home from "./src/pages/home";
import Profile from "./src/pages/profile";
import Login from "./src/pages/login";
const Mswords = props => {
  return <App navigation={props.navigation} />;
};
Login.navigationOptions = {
  header: null
}
Mswords.navigationOptions = {
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
};
Profile.navigationOptions={
  header:null
}
const SimpleApp = StackNavigator({
  Profile:{screen:Profile},
  Login:{screen:Login},
  Home: {screen:Home},
  Mswords: { screen: Mswords },
  Addwords: {screen: Addwords},
  SecondScreen: {screen: SecondScreen},
  Tinder: {screen: Tinder}
});

AppRegistry.registerComponent("msword", () => SimpleApp);