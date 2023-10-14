import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

// components are always have first letter capital
const App = () => {
  const [name, setName] = useState("Bruce");
  return (
    <View>
      <Text style={{fontSize: 50}}>Props in React Native</Text>
      <Button title='Update Name' onPress={()=>setName("Shivam")}/>
      <User name={name} age={22}/>
    </View>
  );
};
const User = (props) => {
  console.warn('After pressing Button => ' + props.name + ' , Age => ' + props.age);
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text style={{fontSize: 30}}>Name : {props.name}</Text>
      <Text style={{fontSize: 30}}>Age : {props.age}</Text>
    </View>
  );
};

export default App;
