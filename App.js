import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
const App = ()=>{
  const [data, setData] = useState([]);
  const getAPIdata = async()=>{
    // console.warn("called");
    const url = "http://10.0.2.2:3000/users";                 //replaces with http://192.168.0.103:3000/users   {connect emulator with local ip address}
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }
  useEffect(()=>{
    getAPIdata();
  },[])
  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>Call Json Server API</Text>
      {
        data.length ? 
        data.map((item)=>{
          return(
            <View style={{padding:10, borderColor:"black", borderWidth:1}}>
              <Text style={{fontSize:30}}>Name: {item.name}</Text>
              <Text style={{fontSize:30}}>Age: {item.age}</Text>
              <Text style={{fontSize:30}}>Email: {item.email}</Text>
            </View>
          )
        }):
        null
      }
    </View>
  );
}

export default App;
