import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const App = ()=>{
  return(
    <View style={styles.main}>
      {/* default button have not custom styling so we use belows method */}
      <Text style={{fontSize:44}}>TouchableHighLight Or TouchableOpacity</Text>
        <TouchableHighlight>
          <Text style={styles.button}>Button</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.warning]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.error]}>Error</Text>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"gray",
    color: "white",
    fontSize:25,
    textAlign:"center",
    padding:5,
    margin:10,
    borderRadius:10,
    shadowColor:"black",
    elevation:10,
    shadowOpacity:1,
  },
  success:{
    backgroundColor:"green"
  },
  primary:{
    backgroundColor:"blue"
  },
  warning:{
    backgroundColor:"gold"
  },
  error:{
    backgroundColor:"red"
  }
})

export default App;
