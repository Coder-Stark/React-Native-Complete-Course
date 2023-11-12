import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>Pressable (Button with More Functionality)</Text>
      </View>
      <View style={styles.content}>
      <Pressable
        // onPress={()=>alert("Hello World")}

        onPress={()=>{console.warn("Simple Press")}}
        onLongPress={()=>{console.warn("Long Press")}}         //takes 0.5 seconds or 500ms
        onPressIn={()=>{console.warn("Press In")}}
        onPressOut={()=>{console.warn("Press Out")}}
      >
        <Text style={styles.pressableBtn}>Pressable Button</Text>
      </Pressable>
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
    alignItems:"center",
  },
  pressableBtn:{
    backgroundColor:"blue",
    padding:10,
    borderRadius:10,
    fontSize:30,
    color:"white",
  }
})

export default App;
