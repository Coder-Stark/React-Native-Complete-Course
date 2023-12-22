import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const App = ()=>{

  return(
    <View>
      <Text style={{fontSize:50}}>Element Inspector</Text>
      <Text style={{fontSize:30, color:'red'}}>For Opening Inspector: </Text>
      <Text style={{fontSize:30, color:'red'}}>Press Ctrl + m</Text>
      <View style={styles.box}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    width:100,
    height:100,
    backgroundColor:'green',
    margin:10,
    padding:20
  }
})

export default App;
