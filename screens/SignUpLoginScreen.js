import React,{Component}from 'react';
import {View,Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity,Alert} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
    constructor(){
      super();
      this.state={
        emailId:'',
        password:'',
      }
    }

    userSignUp = (emailId, password) =>{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            return  Alert.alert(
                 'User Added Successfully' );
          })
          .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
        }
      

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          return(Alert.alert("u haven logined successfully"))
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

      render(){
        return(
          <View style={styles.container}>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.title}>Barter System</Text>
            </View>
            <View>
                <TextInput
                style={styles.loginBox}
                placeholder='email-address'
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}
              />
              <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="enter Password"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
            <TouchableOpacity
               style={[styles.button,{marginBottom:20, marginTop:20}]}
               onPress = {()=>{
                 this.userLogin(this.state.emailId, this.state.password)
               }}
               >
               <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
    
             <TouchableOpacity
               style={styles.button}
               onPress={()=>this.userSignUp(this.state.emailId,this.state.password)}
               >
               <Text style={styles.buttonText}>SignUp</Text>
             </TouchableOpacity>
          </View>
        </View>
        )
      }
    }
      
    
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   title :{
     fontSize:50,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'red',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"red",
     padding: 10
   },
   buttonText:{
     color:'white',
     fontWeight:'200',
     fontSize:20
   }
  })