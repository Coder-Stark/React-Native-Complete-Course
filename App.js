import React , {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
// const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
const App = ()=>{
  const [data, setData] = useState([]);
  const getApiData = async()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if(result){
      setData(result);
    }
  }
  useEffect(()=>{
    getApiData();
  },[])
  return(
    <View style={styles.container}>
      <Text style={styles.header}>List With API Data</Text>

      {/* for coulmns */}
      <View style={styles.dataWrapper}>
                <View style={{flex:1, margin:2, padding:2}}><Text >Id</Text></View>
                <View style={{flex:0.8, margin:2, padding:2}}><Text >Name</Text></View>
                <View style={{flex:2, margin:2, padding:2}}><Text >Email</Text></View>
        </View>
        {
          data.length ? 
          data.map((item)=>{
            return(
              <View style={styles.dataWrapper}>
                <View style={{flex:1, margin:2, padding:2}}><Text >{item.id}</Text></View>
                <View style={{flex:1, margin:2, padding:2}}><Text >{item.name}</Text></View>
                <View style={{flex:1, margin:2, padding:2}}><Text >{item.email}</Text></View>
                <Button title="Delete" />
                <Button title="Update" />
              </View>
            )
          }) : 
          null
        }
    </View>
  );
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
  }
})
export default App;
