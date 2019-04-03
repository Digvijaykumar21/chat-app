import React, {Component} from 'react';
import 

{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground
}   from 'react-native';
 import {
   Actions,
 } from 'react-native-router-flux';

export default class Home extends Component{
  state ={
    name:"",

  };
  render() {
    return (
      <View style={styles.container}>
         <ImageBackground style={{width:430, height:650}}
   source={require('/home/digvijay/Desktop/chatapp/src/files/asd.jpeg')}>
      <Text style={styles.title}>  
          Enter your name 
      </Text>
      <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="type your name"
              placeholderTextColor = "#ffffff"
              onChangeText={(text) => {
                this.setState({
                  name: text,
                })
              }}
              value={this.state.name}
            
              /> 
               <TouchableOpacity style={styles.button} onPress={() =>{Actions.chat({name: this.state.name,})
              }} >
     
               <Text style={styles.buttonText}>Next
             </Text>
            </TouchableOpacity>
            </ImageBackground>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    marginTop: 200,
    marginLeft: 10,
    fontSize: 20,
    color:'white',
 
},
  inputBox :{
    width :300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color: 'white',
    marginVertical:5
},

button:{
    width :100,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20, 
    marginVertical:20,
    paddingVertical:10
},
buttonText:{
  fontSize: 16,
  fontWeight:'500',
  color:'white',
  textAlign:'center'
}



})