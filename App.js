import React from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';

const App = ()=>{
  const [showModal, setShowModal] = React.useState(false);
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:47}}>Modal or DialogBox</Text>
      </View>
      <Modal   transparent={true} visible={showModal} animationType='slide' >
        <View style={styles.wrapperView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Click to Disappear</Text>
            <Button title='Close Modal' onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.content}>
        <Button title='Open Modal' onPress={()=>setShowModal(true)}/>
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
    justifyContent:"flex-end",
  },
  wrapperView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  modalView:{
    backgroundColor:"white",
    padding:60,
    borderRadius:20,
    shadowColor:"black",
    elevation:10,
  },
  modalText:{
    fontSize:30,
    marginBottom:20,
  }
})

export default App;
