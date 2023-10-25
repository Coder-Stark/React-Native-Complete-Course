import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';

const App = ()=>{
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.warn("Hello");
  },[])

  return(
    <View>
      <Text style={{fontSize:50}}>Life Cycle with UseEffect</Text>
      <Text style={{fontSize:20, color: "red"}}>For using life cycles methods in functional components we use useEffect hooks</Text>
      <Text style={{fontSize:30, color:"green"}}>UseEffect for Mounting phase</Text>
      <Text style={{fontSize:25}}>Increasing Count {count}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)}/>
      <Text style={{fontSize:25}}>The warn is only first time  with using this '[ ]' in useEffect hook otherwise warn every time</Text>
      <Text style={{fontSize:25}}>or we can say work as componentDidMount in class component</Text>
    </View>
  );
}


export default App;
