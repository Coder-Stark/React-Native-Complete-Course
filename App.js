import React , {Component}from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const App= ()=>{
  return(
    <View>
      <Text style={{fontSize:50}}>Life Cycle Phases and Methods</Text>
      <Text style={{fontSize:30, color:"red"}}>There have Three Phases</Text>
      <Text style={{fontSize:20}}>Mounting</Text>
      <Text style={{fontSize:20}}>Update</Text>
      <Text style={{fontSize:20}}>UnMounting</Text>
      
      <Text style={{fontSize:30, color:"red"}}>Life Cycle will be executed</Text>
      <Text style={{fontSize:20}}>When Component Render first time</Text>
      <Text style={{fontSize:20}}>When Component Update with State</Text>
      <Text style={{fontSize:20}}>When Component Update with Props</Text>
      <Text style={{fontSize:20}}>When Component Unmount</Text>
      <Text style={{fontSize:20}}>On Error</Text>
    </View>
  );
}


export default App;
