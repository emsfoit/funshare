import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  BackAndroid,
  Alert
} from 'react-native';
import ModelAlert from '../components/modelAlert';
var deviceheight = Dimensions.get('window').height/(3/2)  ;
var deviceWidth = Dimensions.get('window').width;
export default class addwards extends Component {
  constructor(props) {
    super(props);
      this.state = {
          store :[],
          word:null,
          PopVisible:false,
          uploaded:false
        }
  }
  componentDidMount(){
     this._mounted = true;
      var self=this;
  }
  componentWillUnmount() {
  this._mounted = false;
  }

  
  goToHome() {
    this.setState({stor:[],word:null,PopVisible:false})
    this.props.navigation.navigate("Tinder");
  }
 
  StartUpbload(){ 
    
  }
  editWord(oldWord,newWord){
    console.log(oldWord, newWord)
    var store = this.state.store;
    if(store.indexOf(newWord)===-1){
      var index = store.indexOf(oldWord);
      store[index] = newWord;
    }else{
      console.log(this.refs['email']); 
    }
  }
  addword(){
   var word = this.state.word;
   var store = this.state.store;
   
   if(word){
    if(store.indexOf(word) === -1){
      store.push(word)
      this.setState({word:null,store})
    }
    else{
      this.setState({word:word+" is already there"})
    }  
   }
  }
  removeWord(word){
    var store = this.state.store;    
    var index = store.indexOf(word);
    console.log(index);
    store.splice(index,1);
    console.log(store);
    this.setState({store});
  }
  upload(){
    var store =this.state.store;
    if(store.length>0){
      this.setState({PopVisible: !this.state.PopVisible});
      store = JSON.stringify(store);
      fetch("http://ec2-18-221-66-149.us-east-2.compute.amazonaws.com:8080/words?user_uuid=36ff545d-ca5a-4855-985b-eda712781efb&language=English", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body:store
  
      }).then((responseJson) => {
       this.setState({uploaded:true,store:[]});
      })
    }else{
      Alert.alert("Ops","you have no Words to add")
    }
  }
  
  removeWordsArray(){
    this.setState({store:[],PopVisible: !this.state.PopVisible})
    
  }
  hideModel(){
    this.setState({PopVisible:false});
  }
 
  render() {
   
    const renderWords =  this.state.store.map((word) => {
      return(
        <View key={word} style={styles.wordrow}>
          <Text
            style={styles.word}>{word}
            </Text>
            <TouchableOpacity
            onPress={()=>this.removeWord(word)}
            style={styles.remove}>
            <Text style={styles.removeText}>
            remove
            </Text>
            </TouchableOpacity>
        </View>
      )     
    });
    return (
     <View style={styles.container}>
     <ModelAlert uploaded={this.state.uploaded} popVisible={this.state.PopVisible} hideModel={()=>this.hideModel()}  CancelButton= {this.goToHome.bind(this)} okButton ={() => {this.removeWordsArray()}} />
      <ScrollView>
       <View style = {styles.row}>
         <TextInput
          style={styles.textinput}
          value={this.state.word}
          onFocus={()=>this.setState({word:null})}
          onChangeText={(text) => this.setState({word: text.replace(/\s/g, '')})}
          placeholder={"add new words"}
          onSubmitEditing={() => this.addword()}
          returnKeyType="next"
          placeholderTextColor="'rgba(255, 255,255, 0.5)'"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress = {this.addword()} style ={styles.addwordButton} >
        <Text style = {{color:'white' , fontSize:18 ,fontWeight: "500"}} >Add</Text>
        </TouchableOpacity>
       </View> 
       <View style={{flex:1}}>
        {renderWords}
        </View>


        </ScrollView>
        <TouchableOpacity onPress = {this.upload.bind(this)} style = {{alignItems:'center', width:deviceWidth, padding:10 , backgroundColor:   'rgba(0, 0, 0, 0.7)'}} >
        <Text style = {{color:'white' , fontSize:18 ,fontWeight: "500"}} >add to your list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
   row:{
    width:deviceWidth,
    borderColor:"white",
    borderWidth:1,
    flexDirection:'row'
  },
  wordrow:{
    flex:1,
    height:50,
    paddingRight:15,
    paddingLeft:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    backgroundColor:'rgba(0, 0, 0, 0.1)'
  },
  word:{
    flex:1,
    fontSize:20,
    color:'#222d59'
  },
  textinput: {
    color: 'white',
    backgroundColor:'#222d59',
    fontSize: 20,
    flex: 0.8,
    textAlign: 'center',
    borderColor:'black',
    textAlignVertical: 'center' 
  },
  addwordButton:{
   flex:0.2,
   padding:10 ,
   alignItems:'center',
   backgroundColor:   'rgba(0, 0, 0, 0.5)'
  },
  remove:{
    justifyContent:'center'
  },
  removeText:{
    fontSize:12,
    color:'red'
  }
});

AppRegistry.registerComponent('addwards', () => addwards);
