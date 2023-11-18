import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:40}}>Navigation with React Native (Similar as Routing in Websites)</Text>
      </View>
      <View style={styles.content}>
        <Text style={{fontSize:30, color:"red"}}>Types of Navigation</Text>
        <Text style={{fontSize:20}}>Stack</Text>
        <Text style={{fontSize:20}}>Drawer</Text>
        <Text style={{fontSize:20}}>Tab</Text>
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
    alignItems:"center",
  }
})
export default App;
