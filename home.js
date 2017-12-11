import React, {
    Component
  } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage
  } from 'react-native';
  export default class Home extends Component {
    componentDidMount() {
    
  
    }
  
    goToProfile() {
     // this.props.replaceRoute(Routes.Profile());
    }
    goToLogin() {
      //this.props.replaceRoute(Routes.Login());
    }
    componentDidMount() {
  
    }
  
    componentWillUnmount() {
   
    }
  
    render() {
      return(
        <View style={styles.container}>
  
            <View style={{flexDirection:'row' ,alignItems:'center' , justifyContent:'center',marginTop:12}}>
            <View style={{flex:0.1 ,alignItems:'center'}}>
  
            <TouchableOpacity
            onPress={this.goToProfile.bind(this)}
            >
            <Image
            source={require('./src/img/Undo.png')}
            style={{width:40, height:40}}
            />
            </TouchableOpacity>
  
            </View>
  
            <Image
            source={require('./src/img/keywords.png')}
            style={{height:50, width:150 , }}
  
            />
            <View style={{flex:0.1,alignItems:'center'}}>
             
            
  
             </View>
            </View>
       
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  AppRegistry.registerComponent('Home', () => Home);