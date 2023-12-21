import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{
  return(
    <View>
      <Text style={{fontSize:50, fontWeight:'bold'}}>Change App Icon for Android App</Text>
      <Text style={{fontSize:30, color:'red'}}>We have to do following steps</Text>
      <Text style={{fontSize:30, color:'red'}}>1. /android/app/src/res</Text>
      <Text style={{fontSize:30, color:'red'}}>2. Now Replace all folders accordingly</Text>
    </View>
  );
}

export default App;
