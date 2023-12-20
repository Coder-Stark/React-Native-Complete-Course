import React , {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Modal, TextInput} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [searchData, setSearchData] = useState([]);           //for search function

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
  const searchUser = async (text)=>{
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    console.warn(url);
    let result = await fetch(url);
    result = await result.json();
    if(result){
      setSearchData(result);
    }
  }
  useEffect(()=>{
    getApiData();
  },[])
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Search with API</Text>
      {/* for coulmns */}
      <View style={styles.dataWrapper}>
        <View style={{flex:1, margin:2, padding:2}}><Text>Id</Text></View>
        <View style={{flex:0.8, margin:2, padding:2}}><Text>Name</Text></View>
        <View style={{flex:1, margin:2, padding:2}}><Text>Email</Text></View>
        <View style={{flext:1}}>
          <TextInput 
            style={{ margin: 2, padding:2, borderWidth:1, textAlign:'center', borderColor: "green" , width:200}}
            placeholder='Search'
            onChangeText={(text)=>searchUser(text)}
          />
          {
            searchData.length ?
            searchData.map((item)=>{
              return(
                <View style={{backgroundColor:"red"}}>
                  <View style={{ margin:2, padding:2}}><Text>Id : {item.id}</Text></View>
                  <View style={{ margin:2, padding:2}}><Text>Name : {item.name}</Text></View>
                  <View style={{ margin:2, padding:2}}><Text>Email : {item.email}</Text></View>
                </View>
              );
            }): null
          }
        </View>
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
        <UserModal setShowModal={setShowModal}  selectedUser={selectedUser} getApiData={getApiData}/>
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

  const updateUser = async()=>{
    console.warn(id, name, email);
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({id, name, email})
    });
    result = await result.json();
    if(result){
      console.warn(`User ${id} updated successfully`);
      props.getApiData();
      props.setShowModal(false);
    }
  }
  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {/* <Text>{props.selectedUser.name}</Text> */}
        <TextInput style={styles.input} placeholder='Id' value={id} onChangeText={(text)=>setId(text)} />
        <TextInput style={styles.input} placeholder='Name' value={name} onChangeText={(text)=>setName(text)} />
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} />

        <View style={styles.btn}>
          <Button title='Update' color='green'
            onPress={updateUser}
          />
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
