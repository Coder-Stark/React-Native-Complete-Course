import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"       //same on all navigation
// import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { styles } from './components/Styles';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const App = ()=>{
  return(
    // <View>
    //   <Text style={{fontSize:50}}>Top Tab Navigation</Text>
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="SignUp" component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = ()=>{
  return(
    <View style={styles.loginView}>
      <Text style={{fontSize:40}}>Top Tab Navigation</Text>
      <Text style={{fontSize:30}}>Login Screen</Text>
    </View>
  )
}

const SignUp = ()=>{
  return(
    <View style={styles.SignUpView}>
      <Text style={{fontSize:30}}>SignUp Screen</Text>
    </View>
  )
}

export default App;
