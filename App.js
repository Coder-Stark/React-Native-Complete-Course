import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
      <Text style={{fontSize:50}}>Responsive UI with Flex</Text>
      {/* <View style={{flex:1, backgroundColor: "orange"}}></View> */}
      <View style={styles.box1}></View>
      <View style={styles.box2}>
        <View style={styles.innerBox1}></View>
        <View style={styles.innerBox2}></View>
        <View style={styles.innerBox3}></View>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex : 1,
    // flexDirection: "row"
  },
  box1 : {
    flex : 1,
    backgroundColor: "orange"
  },
  box2 : {
    flex : 1,
    backgroundColor: "white",
    flexDirection:"row"
  },
  box3 : {
    flex : 1,
    backgroundColor: "green"
  },
  innerBox1:{
    flex:1,
    backgroundColor:"red",
    margin:10
  },
  innerBox2:{
    flex:1,
    backgroundColor:"blue",
    margin:10,
  },
  innerBox3:{
    flex:1,
    backgroundColor:"black",
    margin:10
  }
})

export default App;
