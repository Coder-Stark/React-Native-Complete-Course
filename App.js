import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const App = ()=>{
  const skills = [
    {
      id:1,
      name: "C++"
    },
    {
      id:2,
      name: "JavaScript"
    },
    {
      id:3,
      name: "ReactJs"
    },
    {
      id:4,
      name: "NextJs"
    },
  ]
  const [selectedRadio, setSelectedRadio] = useState(1);
  return(
    <View style={styles.main}>
      <Text style={{fontSize:44}}>Dynamic Radio Button using TouchableOpacity</Text>
      <View style={styles.radioContainer}>
      {
        skills.map((item, index)=>
        <TouchableOpacity
        key={index}
        onPress={()=>setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radioButton}>
            {
              selectedRadio === item.id ? <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>{item.name}</Text>
        </View>
        </TouchableOpacity>)
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  radioContainer: {
    flexDirection: "column", // Arrange radio buttons vertically
    alignItems: "column", // Column align within the parent container
  },
  radioWrapper:{
    flexDirection:"row",
    alignItems:"center",
  },
  radioButton:{
    height:40,
    width:40,
    borderColor:"black",
    borderWidth:2,
    borderRadius:20,
    margin:10
  },
  radioBg:{
    height:28,
    width:28,
    backgroundColor:"black",
    borderRadius:14,
    margin:4,
  },
  radioText:{
    fontSize:25
  },
})

export default App;
