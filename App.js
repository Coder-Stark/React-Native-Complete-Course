import React , {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Modal} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const getApiData = async()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if(result){
      setData(result);
    }
  }

  const deleteUser = async(id)=>{
    const url = "http://10.0.2.2:3000/users";
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method : "DELETE"
    });
    result = await result.json();
    if(result){
      console.warn(`User ${id} deleted successfully`);
      getApiData();                                 //for refreshing UI simultaneously otherwise it will delete from Database but not from UI
    }
  }

  const updateUser=(data)=>{
    setShowModal(true);
    setSelectedUser(data);
  }
  useEffect(()=>{
    getApiData();
  },[])
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Pass Data To Modal</Text>
      {/* for coulmns */}
      <View style={styles.dataWrapper}>
        <View style={{flex:1, margin:2, padding:2}}><Text>Id</Text></View>
        <View style={{flex:0.8, margin:2, padding:2}}><Text>Name</Text></View>
        <View style={{flex:2, margin:2, padding:2}}><Text>Email</Text></View>
      </View>
      {
        data.length ?
        data.map((item)=>{
          return(
            <View style={styles.dataWrapper}>
              <View style={{flex:1, margin:2, padding:2}}><Text>{item.id}</Text></View>
              <View style={{flex:1, margin:2, padding:2}}><Text>{item.name}</Text></View>
              <View style={{flex:1, margin:2, padding:2}}><Text>{item.email}</Text></View>
              <Button title="Delete" onPress={()=>deleteUser(item.id)} />
              <Button title="Update" onPress={()=>updateUser(item)} />
            </View>
          )
        }) : 
        null
      }

      <Modal visible={showModal} transparent={true} >
        {/* <UserModal setShowModal={setShowModal}  selectedUser={selectedUser}/>        passing selectedUser as props to UserModal */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:20}}>{selectedUser.name}</Text>
           <Button title='Close' color='red' onPress={()=>setShowModal(false)} />
            {console.warn(selectedUser)}
          </View>
        </View>
      </Modal>
    </View>
  );
}

// const UserModal = (props)=>{
//   console.warn(props.selectedUser);
//   return(
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <Text>{props.selectedUser.name}</Text>
//       </View>
//       <Button title='Close' color='red' onPress={()=>props.setShowModal(false)} />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  header:{
    fontSize:50, 
    textAlign:"center",
    // backgroundColor:"red"
  },
  container: {
    borderWidth:4,
    borderColor:"green"
  },
  dataWrapper:{
    // flex: 1,
    flexDirection: "row",
    padding: 5,
    margin: 5,
    backgroundColor:"orange",
    justifyContent: "space-around",
  },

  //dialog box styles
  centeredView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView:{
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    shadowColor:"black",
    elevation:5,
    shadowOpacity:0.3
  }

})
export default App;
