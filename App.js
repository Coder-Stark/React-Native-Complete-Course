import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{fontSize: 50}}>Handle Text Input</Text>
      <Text style={{fontSize: 20}}>Your Name is : {name}</Text>

      <TextInput 
      style = {styles.textInput}
      placeholder='Enter Your Name'
      value={name}
      onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Text' onPress={()=>setName('')}  />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput : {
    fontSize : 18,
    color : 'blue',
    borderColor : 'green',
    borderWidth: 2,
    margin: 10,
  }
})

export default App;
