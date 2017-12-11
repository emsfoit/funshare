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

  inputContainer: {
    flex: 1,
    margin: 20,
    marginTop: 10,
    marginBottom: 0
  },
  input: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FF4470',
    fontWeight: 'bold',
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
    flex: 1,
    justifyContent: 'center',
  },
});

class Profile extends React.Component {
  constructor(props) {

    super(props);
    this.exit = this.exit.bind(this);
    this.state = {
      user: "hi",
      loading: false
    };
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  exit() {
    BackAndroid.exitApp();
  }
  componentWillMount() {
  
  }


  componentDidMount() {
   
  }
  
  goToHome() {
    this.props.navigation.navigate("Tinder");
  }
  goTofavorite() {
   // var favorite = 1;
   // this.props.replaceRoute(Routes.Home(favorite));
  }
  goToAddwords() {
   // this.props.replaceRoute(Routes.Addwords());
  }
  goToWish() {
    //this.props.replaceRoute(Routes.wishlist());
  }
   
  render() {
    var content = this.state.loading ? "Hi" : this.state.user.desplayName;

    const TopNavigation = () => (
      <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#FF5C7E' }}>
      <View style={{ flex:0.4 , justifyContent:'center' , margin:5  }}>
      </View>
      <View style={{ flex:0.2 , alignItems:'center', justifyContent:'center'   }}>
      <Image
      source={require('./src/img/f.png')}
      style={{width:45, height:45}}
      />
      </View>
      <View style={{ flex:0.4 , alignItems:'flex-end', justifyContent:'center' , margin:5  }}>
        <Image
        source={require('./src/img/swop.png')}
        style={{width:35, height:35}}
        />
      </View>

      </View>
    );
    return(

      <View style={{  flex:1,backgroundColor:'rgba(0, 0, 0, 0.9)'   }}> 
      <View style={styles.imageContainer}>
      <View
      style={styles.profilePictureContainer}
      >       
      <View style = {styles.profilePicture}>
        <Image
        source={require('./src/img/userTemp.png')}
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



      <View style= {{flex:0.3,marginTop:70}}>
      <View style = {styles.buttongrop} >

      <TouchableOpacity style={{flex:1 ,alignItems:'center', justifyContent:'center' ,backgroundColor:'rgba(0, 0, 0, 0.3)', margin:5}}
       >                
        <Text style={{color:'white' , fontSize:18}}>Go to Notepad</Text>     
      </TouchableOpacity>

       <TouchableOpacity style={{flex:1 ,alignItems:'center', justifyContent:'center' ,backgroundColor:'rgba(0, 0, 0, 0.3)', margin:5}}
        onPress={this.goToHome.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>Go to Home</Text>     
      </TouchableOpacity>

       <TouchableOpacity style={{flex:1 ,alignItems:'center', justifyContent:'center' ,backgroundColor:'rgba(0, 0, 0, 0.3)', margin:5}}
        onPress={this.goTofavorite.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>My favorite Words</Text>     
      </TouchableOpacity>
        
      <TouchableOpacity style={{flex:1 ,alignItems:'center', justifyContent:'center' ,backgroundColor:'rgba(0, 0, 0, 0.3)', margin:5}}
       onPress={this.goToAddwords.bind(this)}>                
        <Text style={{color:'white' , fontSize:18}}>Add new Words</Text>     
      </TouchableOpacity>

        

      
        </View>
        </View>

        <View style = {{flex:0.1,marginBottom:10,justifyContent:'flex-end',  alignItems:'center'}}>

        <Image

        source={require('./src/img/keywords.png')}
        style={{height:50, width:170 }}

        />

        </View>

        </View>

    );
  }


}


export default Profile;