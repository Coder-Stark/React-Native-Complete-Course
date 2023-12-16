import React, { useState } from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [emailError, setEmailError] = useState('');

    const saveData = async ()=>{

      if(!name){
        setNameError(true);
      }else{
        setNameError(false);
      }

      if(!age){
        setAgeError(true);
      }else{
        setAgeError(false);
      }

      if(!email){
        setEmailError(true);
      }else{
        setEmailError(false);
      }

      if(!name || !age || !email){
        return false;
      }
      console.warn("next");
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
      <Text style={{fontSize:50, textAlign:"center"}}>Simple Form Validation</Text>
      <TextInput
        style={styles.input}
        value= {name}
        onChangeText={text => setName(text)}
        type="text"
        placeholder="Enter Name"
      />
      {
        nameError ?
        <Text style={styles.errorText}>Please Enter Valid Name</Text>
        : null
      }
        
      <TextInput
        style={styles.input}
        value= {age}
        onChangeText={text => setAge(text)}
        type="number"
        placeholder="Enter Age"
      />
      {
        ageError ?
        <Text style={styles.errorText}>Please Enter Valid Age</Text>
        : null
      }

      <TextInput
        style={styles.input}
        value= {email}
        onChangeText={text => setEmail(text)}
        type="text"
        placeholder="Enter Email"
      />
      {
        emailError ?
        <Text style={styles.errorText}>Please Enter Valid Email</Text>
        : null
      }
      <Button title = "Save Data" onPress={() => saveData()} />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin: 12,
    marginBottom:5,
    borderWidth: 1,
    padding: 10,
    fontSize:20
  },
  errorText:{
    color:"red",
    fontSize:20,
    marginLeft: 12
  }
})
export default App;
