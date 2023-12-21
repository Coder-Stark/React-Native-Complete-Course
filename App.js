import React, { useRef } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
const App = ()=>{
  const ref = useRef();
  const updateInput = ()=>{
    console.warn("Automatically focus on input");
    ref.current.focus();
    ref.current.setNativeProps({
      text: "First fill name then Password",
      fontSize: 30
    })
  }
  return(
    <View>
      <Text style={styles.header}>Ref In React Native</Text>
      <Text style={{fontSize:20, color:"red"}}>The ref is a special attribute that is used to reference a React element or a component created in the application.</Text>
      <TextInput ref={ref} style={styles.input} placeholder="Enter Name"/>
      <TextInput style={styles.input} placeholder="Enter Password"/>
      <Button title='Update Input' onPress={updateInput}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    fontSize:50, 
    textAlign:"center",
    // backgroundColor:"red"
  },
  input:{
    borderWidth:1,
    borderColor:"black",
    margin:10
  }
});
export default App;
