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
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
    this.transformToJson(e.value[0]);
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
    });
    
  }
  transformToJson(sentences){
    var words = sentences.split(" ");
    var wordsToJson = JSON.stringify(words);
    this.upload(wordsToJson)
  }
  upload(wordsToJson){
    console.log(wordsToJson);
    fetch("http://ec2-18-221-66-149.us-east-2.compute.amazonaws.com:8080/words", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body:wordsToJson

    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
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