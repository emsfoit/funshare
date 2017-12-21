'use strict';
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  BackAndroid,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import costyles from "../styles/co-styles"
var deviceheight = Dimensions.get('window').height;
var devicewidth = Dimensions.get('window').width;


export default class login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: null,
      email: null,
      password: null
    };
  }

 

  
  goToHome() {
    //this.props.replaceRoute(Routes.Home());
  }

  render() {


    return(
    <View style={{flex:1,backgroundColor:'rgba(0, 0, 0, 0.9)'}}> 

      <ScrollView>

      <View style={costyles.LogoComponent}>

      <Image 
      resizeMode={Image.resizeMode.contain}
      source={require('../img/keywolrdsLogo.png')}
      style={costyles.fLogo}                                
      />

      <Image 
      resizeMode={Image.resizeMode.contain}
      source={require('../img/Logo.png')}
      style={costyles.Logo}                                
      />


      </View>
      <View style={{flex:0.4, marginTop:deviceheight/10,justifyContent:'flex-end'}}>

      <View style = {styles.textinputcontainer}>
      <TextInput
      style={styles.textinput}
      onChangeText={(text) => this.setState({name: text})}
      placeholder={"Name"}
      onSubmitEditing={() => this.email.focus()}
      returnKeyType="next"
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      />
      </View>
      <View style = {styles.textinputcontainer}>
      <TextInput
      ref={(ref) => this.email = ref}
      style={styles.textinput}
      onChangeText={(text) => this.setState({email: text.replace(/\s/g, '')})}
      keyboardType={"email-address"}
      placeholder={"E-Mail Adress"}
      onSubmitEditing={() => this.password.focus()}
      returnKeyType="next"
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      />
      </View>
      <View style = {styles.textinputcontainer}>
      <TextInput
      maxLength = {18}
      ref={(ref) => this.password = ref}
      style={styles.textinput}
      onChangeText={(text) => this.setState({password: text})} 
      secureTextEntry={true}
      placeholder={"Passwort"}
      returnKeyType="done"
      onSubmitEditing={this.login.bind(this)}
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      />
      </View>

      <View style={{    margin:5, flexDirection: 'row'}}>
      <View style= {{flex:0.5}}>
      
      </View>
      <View style={{ flex:0.5  , alignItems:'center'  }}>
      <TouchableHighlight
       onPress={this.goToSignup.bind(this)}
     >
      <Text style={{textDecorationLine: 'underline', color:"white" , fontSize:14}}>Jetzt hier registrieren</Text>     
      </TouchableHighlight>
      </View>
      </View>

      </View>



      <View style={{flex: 0.1,justifyContent:'center', alignItems: 'center', marginTop: deviceheight/15}}>


      

      </View>


      </ScrollView>  
      </View>
    );
  }

  goToSignup() {
    //this.props.replaceRoute(Routes.SellectGroup());
  }


  login() {
    
  }
}
var styles = {
  textinput: {
    color: 'white',
    fontSize: 15,
    flex: 1,
    textAlign: 'left'
  },
  textinputcontainer: {
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#F5FCFF',
    borderRadius: 5,
    borderBottomColor: "rgba(255,255,255,0.75)",
    borderWidth: 0.5,
  },
};
AppRegistry.registerComponent('login', () => login);