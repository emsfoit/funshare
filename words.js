import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from 'react-native';
var deviceheight = Dimensions.get('window').height / (3 / 2);
var deviceWidth = Dimensions.get('window').width - 30;
var modalheight = Dimensions.get('window').height / 2;
import Voice from 'react-native-voice';

export default class VoiceTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      
    };
 }

  componentWillUnmount() {
    
    
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Text
          style={styles.logTxt}>
         The most used words were
        </Text>
        </View>
        <View style={styles.container}>

       <View style={styles.card}>
       <View style = {styles.row}>
        <Text
        style={styles.textinput}>
        Grate
        </Text>
        <Text
        style={styles.textinput1}>
        Hi
        </Text>
       </View>  
       <View style = {styles.row}>
        <Text
        style={styles.textinput}>
        amazing
        </Text>
        <Text
        style={styles.textinput1}>
        Wooow
        </Text>
       </View>  
       <View style = {styles.row}>
        <Text
        style={styles.textinput}>
        extraordinary
        </Text>
        <Text
        style={styles.textinput1}>
        know
        </Text>
       </View>  
       <View style = {styles.row}>
        <Text
        style={styles.textinput}>
        what
        </Text>
        <Text
        style={styles.textinput1}>
        yes
        </Text>
       </View>  
       </View>
        </View>
     
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height:100,
    marginTop:50, 
  },
  logTxt:{
    fontSize: 25,
    color:'#ffffff',
    margin: 30,
  },
  button: {
    width: 75,
    height: 75,
    marginTop:100
  },
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#283359',
  },
  logoContainer:{
    flex:0.3,
    alignItems:'center',
  },
  main: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 1,
  },
  row: {
    width: deviceWidth,
    height: deviceheight / 4 - 5,
    borderColor: "white",
    borderWidth: 1,
    flexDirection: 'row'
  },
  textinput: {
    color: 'white',
    backgroundColor: '#222d59',
    fontSize: 20,
    flex: 0.5,
    textAlign: 'center',
    borderColor: 'black',
    textAlignVertical: 'center'
  },
  textinput1: {
    color: 'white',
    backgroundColor: '#592252',
    fontSize: 20,
    flex: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});

AppRegistry.registerComponent('App', () => VoiceTest);