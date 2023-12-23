import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{

  return(
    <View>
      <Text style={{fontSize:50, textAlign:'center'}}>Redux Installation & File Structure</Text>
      <Text style={{fontSize:40, color:'orange'}}>Install Redux Package</Text>
      <Text style={{fontSize:25, color:'green'}}>-redux = npm i redux</Text>
      <Text style={{fontSize:25, color:'green'}}>-react-redux = npm i react-redux</Text>
      <Text style={{fontSize:25, color:'green'}}>-redux toolkit = npm i @reduxjs/toolkit</Text>
      <Text style={{fontSize:40, color:'orange'}}>File Structure</Text>
      <Text style={{fontSize:25, color:'green'}}>/components/-/redux</Text>
      <Text style={{fontSize:25, color:'green'}}>/redux/action.js</Text>
      <Text style={{fontSize:25, color:'green'}}>/redux/reducer.js</Text>
      <Text style={{fontSize:25, color:'green'}}>/redux/store.js</Text>
      <Text style={{fontSize:25, color:'green'}}>/redux/rootReducer.js</Text>
    </View>
  );
}

export default App;
