import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const App = ()=>{
  const [selectedRadio, setSelectedRadio] = useState(1);
  return(
    <View style={styles.main}>
      <Text style={{fontSize:44}}>Radio Button using TouchableOpacity</Text>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioButton}>
              {
                selectedRadio === 1 ? <View style={styles.radioBg}></View> : null
              }
            </View>
            <Text style={styles.radioText}>Radio 1</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioButton}>
              {
                selectedRadio === 2 ? <View style={styles.radioBg}></View> : null
              }
            </View>
            <Text style={styles.radioText}>Radio 2</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  radioWrapper:{
    flexDirection:"row",
    alignItems:"center"
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
