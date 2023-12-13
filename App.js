import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{
  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>Install Json Server </Text>
      <Text style={{fontSize:30, margin:10}}>URL : https://www.npmjs.com/package/json-server</Text>
      <Text style={{fontSize:30, margin:10}}>Package : npm install -g json-server</Text>
      <Text style={{fontSize:30, margin:10}}>Create a Folder(API) and create a db.json file</Text>
      <Text style={{fontSize:30, margin:10}}>Start server in folder with command : json-server --watch db.json</Text>
      <Text style={{fontSize:30, margin:10}}>Server Started on local host 3000</Text>
    </View>
  );
}

export default App;