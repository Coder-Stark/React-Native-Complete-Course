import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

// components are always have first letter capital
const App = () => {
  const [name, setName] = useState("Shivam Kumar");
  let data = "Sam"

  const testName = ()=>{
    setName("Shivam Rajbhar");
    data = "Peter"
    // sam should change to peter but not changed after pressing button 
    console.warn('Sam is not change to Petter (variable not state)');
  }
  return (
    <View>
      <Text style={{fontSize: 50}}>State in React Native</Text>

      {/* after updating state, the component is  re-render */}
      <Text style={{fontSize: 30}}>{name}</Text>
      
      {/* after updating variable, the component is not render */}
      <Text style={{fontSize: 30}}>{data}</Text> 
      <Button title='Updata Name' onPress={testName}/>
    </View>
  );
};

export default App;
