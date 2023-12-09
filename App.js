import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View} from 'react-native';
const App = ()=>{
  const [data, setData] = useState([]);
  const getAPIData = async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(()=>{
    getAPIData();
  },[]);

  return(
    <ScrollView>
      <Text style={{fontSize:50, textAlign:"center"}}>List With API Call</Text>
      <Text style={{fontSize:25, padding: 5 , margin:5, fontWeight:"bold"}}>Fetched Data</Text>
      {
        data.length ? data.map((item)=>{
          return(
            <View style={{padding: 5 , margin:5, borderBottomColor:"black", borderBottomWidth:1}}>
              {/* <Text style={{fontSize:20}}>UserId : {item.userId}</Text> */}
              <Text style={{fontSize:20, backgroundColor:"gray"}}>Id : {item.id}</Text>
              <Text style={{fontSize:20}}>Title : {item.title}</Text>
              <Text style={{fontSize:20}}>Body : {item.body}</Text>
            </View>
          )
        }):
        null
      }
    </ScrollView>
  );
}


export default App;
