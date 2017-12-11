import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Voice from 'react-native-voice';
import { StackNavigator } from "react-navigation";
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
      recordStatus: ''
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
      recordStatus: ''
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
    fetch("http://ec2-18-221-66-149.us-east-2.compute.amazonaws.com:8080/words?user_uuid=36ff545d-ca5a-4855-985b-eda712781efb&language=English", {
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
      end: '',
      recordStatus: 'Recording ...'
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    this.setState({recordStatus:''})
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
      end: '',
      recordStatus: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
            style={styles.logo}
            source={require('./sounds.png')}
          />
           <Text
          style={styles.logTxt}>
         Echo Word
        </Text>
        <Text
          style={styles.stat}>
           Let's catch new Words
        </Text>
        </View>
     
      <View style={styles.main}>
         
        
        {this.state.partialResults.map((result, index) => {
          return (
            <Text
              key={`partial-result-${index}`}
              style={styles.stat}>
              {result}
            </Text>
          )
        })}
         
        <TouchableOpacity onPress={this._startRecognizing.bind(this)}>
          <Image
            style={styles.button}
            source={require('./button.png')}
          />
        </TouchableOpacity>
        <Text
              style={styles.stat}>
              {this.state.recordStatus}
        </Text>
        </View>

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ThirdScreen")}>
         <Text
              style={styles.stat}>
              Show the most frequently words
        </Text>
        </TouchableOpacity>
        
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
    fontSize: 40,
    color:'#ffffff',
    margin: 10,
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
    flex:0.5,
    alignItems:'center',
  },
  main: {
    flex: 0.5,
    marginTop:50,
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
    margin: 20,
    fontSize:20
  },
});

AppRegistry.registerComponent('App', () => VoiceTest);