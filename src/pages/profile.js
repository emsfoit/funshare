'use strict';
import React from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Dimensions,
  Image,
  NativeModules,
  PropTypes,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  BackAndroid,
  Platform,
  Text
} from 'react-native';
var deviceWidth = Dimensions.get('window').width - 6;
var deviceheight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.9)',
    flexDirection:'row',
  },
  username: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 25,
    flex: 0.3,
  },
  profilePictureContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 5,
  },
  buttongrop: {
    flex:0.6,
    marginTop:50,
    justifyContent: 'center',
  },
  button:{ 
    alignItems:'center',
    justifyContent:'center' ,
    backgroundColor:'rgba(0, 0, 0, 0.3)',
     marginTop:15,
     height:25
  },
  bottomLogo:{
    marginTop:50,
    alignItems:'center',
     
  }
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  goToHome() {
    this.props.navigation.navigate("Tinder");
  }
  goTofavorite() {
   // var favorite = 1;
   // this.props.replaceRoute(Routes.Home(favorite));
  }
  goToAddwords() {
    this.props.navigation.navigate("Addwords");
  }
  goToMsWords() {
    this.props.navigation.navigate("Mswords");
  }
   
  render() {
  
    return(
      <View style={styles.container}> 
      <ScrollView> 
      <View style={styles.imageContainer}>
      <View
      style={styles.profilePictureContainer}
      >       
      <View style = {styles.profilePicture}>
        <Image
        source={require('../img/userTemp.png')}
        style={styles.profilePicture}
        >

        </Image>

        
      </View>
   
     
      </View>
       <View>
        <Text
       style={styles.username}
       >Welcome back</Text>
       <Text
       style={styles.username}
       >Mohamad sakka</Text>
       </View>       
      </View>
      <View style = {styles.buttongrop} >

      <TouchableOpacity style={styles.button}
       onPress={this.goToMsWords.bind(this)}>        
        <Text style={{color:'white' , fontSize:18}}>Catch new words</Text>     
      </TouchableOpacity>

       <TouchableOpacity style={styles.button}
        onPress={this.goToHome.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>Go to Home</Text>     
      </TouchableOpacity>

       <TouchableOpacity style={styles.button}
        onPress={this.goTofavorite.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>My favorite Words</Text>     
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.button}
       onPress={this.goToAddwords.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>Add new Words</Text>     
      </TouchableOpacity>

        

      
        </View>
        <View style = {styles.bottomLogo}>

        <Image
        source={require('../img/keywords.png')}
        style={{height:50, width:170 }}
        />

        </View>
        </ScrollView>
        </View>

    );
  }


}


export default Profile;