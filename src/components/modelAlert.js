'use strict';

import React , {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  BackAndroid,
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var modalheight = Dimensions.get('window').height/2 ;

export default class ModelAlert extends Component { 
  
  render() {
    return (
      <Modal
      animationType={"fade"}
      transparent={true}
      visible={this.props.popVisible}
      onRequestClose= {this.props.hideModel}
    >

    <View style={ {flex:1} }>

    <View style= {{justifyContent:'center', alignItems:'center', height:deviceHeight, backgroundColor:   'rgba(0, 0, 0, 0.6)'}} >

    <View style = {{width:deviceWidth-10,height:160 ,backgroundColor: '#FF5C7E' , borderRadius:5}}>
        <View style = {{alignItems:'center' , marginTop:10}}>
        <Image 
        resizeMode={Image.resizeMode.contain}
        source={require('../img/Logo.png')}
        style={{height:40, width:40}}                                
        />
        </View>
        
        <View style= {{alignItems:'center', marginBottom:15}} >
            <Text style={{color:'white', fontSize:20}}>
            {this.props.uploaded ? 'You have new words' : 'Uploading ...'}
            </Text>
            <Text style={{color:'white', fontSize:15}}>{this.props.uploaded ? 'to learn' : ''}</Text>
        </View>
        <View style= {{flex:1,borderColor:'white',flexDirection:'row', borderTopWidth:0.7 ,alignItems:'center',justifyContent:'center' }}>
         
         <View style = {{flex:0.5 ,borderColor:'white',borderRightWidth:0.5,alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity
            onPress={this.props.okButton}
            style={{flex:1,borderColor:'white', justifyContent:'center',backgroundColor:'#FF5C7E' }}>
            <Text style={{color:'white', fontSize:15}}>Add new words</Text>
            </TouchableOpacity>
            </View>
          <View style = {{flex:0.5 ,alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity
            onPress={this.props.CancelButton}
            style={{flex:1,justifyContent:'center', backgroundColor:'#FF5C7E' }}>
            <Text style={{color:'white', fontSize:15}}>Start Memorising</Text>
            </TouchableOpacity>
            </View>
            </View>
  
    </View>
    </View>
    </View>
    </Modal>

        );
      }
    }