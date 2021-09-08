import { StatusBar } from 'expo-status-bar';
import React , {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDtNSEqTiWUsi5PWm4p6cdM5tLiO7iorcg",
    authDomain: "bubble-74b47.firebaseapp.com",
    projectId: "bubble-74b47",
    storageBucket: "bubble-74b47.appspot.com",
    messagingSenderId: "371970898936",
    appId: "1:371970898936:web:0505857416beaf52da340d",
    measurementId: "G-C2LD1E29SL"
  };

  if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig)
  }
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Redux/Reducer'
import thunk from 'redux-thunk'
import MainScreen from './components/Main'
import AddScreen from './components/Main/Add'

const  store = createStore(rootReducer,applyMiddleware(thunk))



const  Stack = createStackNavigator();
const App = (props) => {
  const [loaded, setLoaded] = useState(false)
  const [loggedIn, setLoggedIn] = useState()
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        
        setLoggedIn(false)
        setLoaded(true)
      }
      else{
        
        setLoaded(true)
        setLoggedIn(true)
      }
    })
   
  },[])
  if(loaded == false){
    
     return(
      <View style = { { flex:1 ,justifyContent :  'center'}}>
        <Text>Loading</Text>
      </View>
    )
  }

  // if(loggedIn == false){
    

  //   return (
    

    
  //   <NavigationContainer>
  //      <Stack.Navigator initialRouteName = "Landing">
  //         <Stack.Screen name ="Landing" component= { LandingScreen} options = {{ headerShown : false}}/>
  //         <Stack.Screen name ="Register" component= { RegisterScreen} />
  //         <Stack.Screen name ="Login" component= { LoginScreen} />

  //      </Stack.Navigator>
  //   </NavigationContainer>
  // );
  // }
  return (
   

    <Provider store = {store}>
          <NavigationContainer>
       <Stack.Navigator initialRouteName = "Landing">
          <Stack.Screen name ="Main" component= { MainScreen} options = {{ headerShown : false}}/>
          <Stack.Screen name ="Add" component= { AddScreen} />

       </Stack.Navigator>
    </NavigationContainer>
     
    </Provider>
  )
}

export default App;
