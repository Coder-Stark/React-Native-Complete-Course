import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>PlatForm : {Platform.OS}</Text>
      </View>
      <View style={styles.content}>
        {
          Platform.OS == "green" ? 
          <View style={{height:100, width:100 , backgroundColor:"red"}}></View>
          : <View style={{height:100, width:100 , backgroundColor:"green"}}></View>
        }
        <Text style={styles.text}>Based on OS Color Change</Text>
        <Text style={{fontSize:20}}>React Native Version : {JSON.stringify(Platform.constants.Version)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  },
  content:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color: Platform.OS == "android" ? "blue" : "yellow",
    fontSize:50
  }
})

export default App;
