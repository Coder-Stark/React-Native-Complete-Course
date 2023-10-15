import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ExStyles from './style';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Styles in React Native</Text>

      <Text style={{fontSize: 30, color:'red', backgroundColor:'yellow'}}>This is Inline Styling</Text>

      <Text style={styles.textBox}>This is Internal Styling</Text>
      <Text style={styles.textBox}>This is Internal Styling</Text>


      <Text style={ExStyles.textBox}>This is External Styling</Text>
      <Text style={ExStyles.textBox}>This is External Styling</Text>

      <Text style={[{marginTop:20}, styles.textBox, ExStyles.textBox]}>All Styling Combinations</Text>

    </View>
  );
};

//internal styling
const styles = StyleSheet.create({
  textBox:{
    fontSize:30,
    color:'blue',
    backgroundColor:'gray',
    marginBottom:10,
    padding:5,
    borderWidth:2,
    borderColor:'red',
    borderRadius:10,
    height:50,
    textAlignVertical:'center',
    textAlign:'center',
  },
});

export default App;
