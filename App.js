import React , {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Modal, TextInput} from 'react-native';
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
      <Text style={styles.header}>Populate Data In Input Fields</Text>
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
              <Button title="Delete" 
                onPress={()=>deleteUser(item.id)}
              />
              <Button title="Update"
                onPress={()=>{
                  updateUser(item)
                  console.warn("After Clicking Update")
                }}
              />
            </View>
          )
        }) : 
        null
      }

      <Modal visible={showModal} transparent={true} >
        {/* passing selectedUser as props to UserModal */}
        <UserModal setShowModal={setShowModal}  selectedUser={selectedUser}/>
      </Modal>
    </View>
  );
}
// same as above but getting error
const UserModal = (props)=>{
  // console.warn(props.selectedUser);
  const [id, setId] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(()=>{
    if(props.selectedUser){
      setId(props.selectedUser.id.toString());               //input fields should be in string
      setName(props.selectedUser.name);
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);                         //it will call only iff selectedUser changes
  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {/* <Text>{props.selectedUser.name}</Text> */}
        <TextInput style={styles.input} placeholder='Id' value={id} onChangeText={(text)=>setId(text)} />
        <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text)=>setName(text)} />
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} />

        <View style={styles.btn}>
          <Button title='Update' color='green'/>
        </View>
        <View style={styles.btn}>
          <Button title='Close' color='red' 
            onPress={()=>props.setShowModal(false)} 
          />
        </View>
      </View>
    </View>
  )
}

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
  },
  input:{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    width:250,
    fontSize:20
  },
  btn:{
    margin:10
  }

})
export default App;
