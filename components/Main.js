import React, {useEffect,useState} from 'react'
import {View,Text} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {connect}  from 'react-redux'
import {fetchUser} from '../Redux/Action'
import FeedScreen from './Main/Feed'

import ProfileScreen from './Main/Profile'
import MaterialCommunityIcons from   'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();


const EmptyScreen=()=>{
    return(null);
}


const Main =(props)=> {
   
    useEffect(()=>{
       props.fetchCurrentUser();
    },[]);
    const {currentUser }= props;
    
    if (currentUser == undefined){
        return(
            <View>nothing to display</View>
        )
    }
    return (
        <Tab.Navigator initialRouteName= "Feed">
          <Tab.Screen name="Feed" component={FeedScreen}
          options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name = "home" color = {color} size = {26}/>)}} />
          <Tab.Screen name="AddContainer" component={EmptyScreen}
          listeners = {({navigation})=> ({
            tabPress: event =>{
                event.preventDefault();
                navigation.navigate("Add")
            }}
            )
        }
          options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name = "plus-box" color = {color} size = {26}/>)}} />
          <Tab.Screen name="Profile" component={ProfileScreen}
          options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name = "account-circle" color = {color} size = {26}/>)}} />
        </Tab.Navigator>
   
    )
}

const mapStateToProps =(state)=>{
    
    return{
        currentUser :state.currentUser
    }

};
const mapDispatchToProps =(dispatch)=>{
    return{
        fetchCurrentUser : () => dispatch(fetchUser())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Main)