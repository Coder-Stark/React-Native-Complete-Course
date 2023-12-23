import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{

  return(
    <View>
      <Text style={{fontSize:50, textAlign:'center'}}>Redux Architecture</Text>
      <Text style={{fontSize:40, color:'orange'}}>Redux Flow</Text>
      <Text style={{fontSize:25, color:'green'}}>View</Text>
      <Text style={{fontSize:25, color:'green'}}>Action</Text>
      <Text style={{fontSize:25, color:'green'}}>Reducers</Text>
      <Text style={{fontSize:25, color:'green'}}>Store </Text>
      <Text style={{fontSize:25, color:'green'}}>View</Text>
      <Text style={{fontSize:30, color:'orange'}}>In Saga flow after action there is another box or component to handle asynchronous action of API Calls</Text>
    </View>
  );
}

export default App;
