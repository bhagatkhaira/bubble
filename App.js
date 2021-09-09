import { StatusBar } from 'expo-status-bar';
import React , {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


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

  return (
   

    <Provider store = {store}>

      <View>
        <Text>Home Screen</Text>
      </View>
          
     
    </Provider>
  )
}

export default App;
