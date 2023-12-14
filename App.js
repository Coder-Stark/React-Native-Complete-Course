import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{
  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>Test API with PostMan</Text>
      <Text style={{fontSize:40, margin:10, color:"red"}}>Most Used Methods</Text>
      <Text style={{fontSize:30, margin:10}}>GET - For Fetching Data</Text>
      <Text style={{fontSize:30, margin:10}}>POST - For Posting Data</Text>
      <Text style={{fontSize:30, margin:10}}>PUT - For Updating</Text>
      <Text style={{fontSize:30, margin:10}}>DELETE - For Deleting</Text>
    </View>
  );
}

export default App;