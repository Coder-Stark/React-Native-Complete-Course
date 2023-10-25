import React from 'react';
import {Text, View} from 'react-native';

const App= ()=>{
  return(
    <View>
      <Text style={{fontSize:50}}>Hooks in React Native</Text>
      <Text style={{fontSize:30, color:"red"}}>'use' key word defined hooks</Text>
      <Text style={{fontSize:20}}>hooks can't be use in class based component</Text>
      <Text style={{fontSize:30, color:"red"}}>Hooks can be used in :</Text>
      <Text style={{fontSize:20}}>State</Text>
      <Text style={{fontSize:20}}>Life Cycle methods</Text>
      <Text style={{fontSize:20}}>Content Api</Text>
      <Text style={{fontSize:20}}>Ref and Memo</Text>
      <Text style={{fontSize:25}}>We can make Custom Hooks also</Text>
    </View>
  );
}


export default App;
