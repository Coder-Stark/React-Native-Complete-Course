import React, { useState } from 'react';
import {Text, View, StyleSheet, StatusBar, Button} from 'react-native';

const App = ()=>{
  const [hide, setHide] = useState(false);
  const [update, setUpdate] = useState("default")
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>Status Bar</Text>
      </View>
      <View style={styles.content}>
        <StatusBar 
          backgroundColor="orange"
          barStyle={update}                      //"dark-content"
          hidden={hide}
        />
        <Button title='Toggle Status Bar' onPress={()=>setHide(!hide)}/>
        <Button title='Update BarStyle' onPress={()=>setUpdate("dark-content")}/>
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
  },
})

export default App;
