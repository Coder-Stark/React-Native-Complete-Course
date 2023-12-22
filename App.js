import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = ()=>{
  const [user, setUser] = useState('');
  const setData = async()=>{
    // await AsyncStorage.setItem('key', 'value');
    await AsyncStorage.setItem('user', 'Shivam Kumar');
    console.warn("Data Setted(SET DATA) then after (GET DATA)")
  }
  const getData = async()=>{
    const name = await AsyncStorage.getItem('user');
    // console.warn(name);
    setUser(name);
  }
  const removeData = async()=>{
    await AsyncStorage.removeItem('user');
    setUser('');
    console.warn("Data Removed");
  }
  return(
    <View>
      <Text style={{fontSize:50}}>Async Storage With React Native</Text>
      <Text style={{fontSize:20, color:'red'}}>Asynchronous storage refers to a mechanism for storing and persisting data asynchronously on a user's device. It allows developers to save data locally on the device's storage in an asynchronous manner, meaning that the data operations don't block the main thread or user interface, ensuring a smooth user experience.</Text>
      <Text style={{fontSize:30, borderColor:'green', borderWidth:2, margin:5, padding:5}}>User : {user}</Text>
      <Button title = "Set Data" onPress={setData} />
      <Button title = "Get Data" onPress={getData} />
      <Button title = "Remove Data" onPress={removeData} />
    </View>
  );
}

export default App;
