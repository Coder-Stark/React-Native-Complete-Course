import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { styles } from './Styles';
export const Login = (props)=>{                            //back arrow created automatically
//   const name = "Shivam Kumar";
  const [name, setName] = useState("");
  const age = 22;
  return(
    <View style={styles.loginView}>
      <Text style={{fontSize:40}}>Login Screen</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={(text)=>setName(text)}
      />
      <Button title="Move to Home" onPress={()=>props.navigation.navigate("Home", {name,age})}/>
    </View>
  )
}