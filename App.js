import React , {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const App = ()=>{
  const [show, setShow] = useState(false);
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>Custom Modals Or DialogBox</Text>
      </View>
      <View style={styles.content}>
      {
        show ? 
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text style={styles.text}>Click to Disappear</Text>
            <Button title='Close Modal' onPress={()=>setShow(false)}/>
          </View>
        </View> :
        null
      }
      <Button title='Open DialogBox' onPress={()=>setShow(true)}/>
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
    justifyContent:"flex-end"
  },
  modal:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    height:150,
    width:300,
    padding:20,
    backgroundColor:'white',
    justifyContent:'flex-end',
    borderRadius:20,
  },
  text:{
    fontSize:30,
    textAlign:'center',
  }
})
export default App;
