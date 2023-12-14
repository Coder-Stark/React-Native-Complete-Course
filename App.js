import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
  const saveData = async () => {
    try {
      console.warn("test");
      const data = { name: "John Doe", age: 30, email: "zxt@gmail.com" };
      const url = "http://10.0.2.2:3000/users";
      let result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
  
      if (!result.ok) {
        throw new Error('Failed to save data');
      }
      const responseJson = await result.json();
      console.warn("Data Saved to DataBase", responseJson);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>Simple POST API</Text>
      <Button title="Save Data" onPress={saveData}/>
    </View>
  );
}

export default App;
