import React from 'react';
import {Text, View,Button} from 'react-native';
import { styles } from './Styles';

export const Home = (props)=>{                         //some props are already present in navigation
  console.warn("Dyanamic Data from Login screen to home screen")
  const {name, age} = props.route.params;              //destructuring
  return(
    <View style={styles.homeView}>
      <Text style={{fontSize:30}}>Pass Data Between Screen</Text>
      <Text style={{fontSize:40}}>Home Screen</Text>
      <Button title="Move to Login" onPress={()=>props.navigation.navigate("Login")}/>

      {/* <Text style={{fontSize:20}}>Name : {props.route.params.name}</Text>
      <Text style={{fontSize:20}}>Age : {props.route.params.age}</Text> */}
      <Text style={{fontSize:20}}>Name : {name}</Text>
      <Text style={{fontSize:20}}>Age : {age}</Text>
      
    </View>
  )
}