import React, { useState } from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const saveData = async ()=>{
      console.warn(name);
      const url = "http://10.0.2.2:3000/users";
      let result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({name: name, age: age,email: email})       //same as below
        body: JSON.stringify({name, age, email})
      });
      result = await result.json();
      if(result){
        console.warn("Data saved successfully");
      }
    }
    return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>POST API With Input Data</Text>
      <TextInput
        style={styles.input}
        value= {name}
        onChangeText={text => setName(text)}
        type="text" 
        placeholder="Enter Name" 
      />

      <TextInput
        style={styles.input}
        value= {age}
        onChangeText={text => setAge(text)}
        type="text"
        placeholder="Enter Age" 
      />

      <TextInput
        style={styles.input}
        value= {email}
        onChangeText={text => setEmail(text)}
        type="text"
        placeholder="Enter Email"
      />
      <Button title = "Save Data" onPress={() => saveData()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize:20
  }
})
export default App;
