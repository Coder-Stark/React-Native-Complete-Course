import React, { useEffect, useState } from 'react';
import {FlatList, Text, View} from 'react-native';
const App = ()=>{
  const [data, setData] = useState([]);
  const getAPIData = async()=>{
    // console.warn("Called");

    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    // console.warn(result);                     //data shows in console log
  }

  useEffect(()=>{
    getAPIData();
  },[])
  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>FlatList With API Data</Text>
      {
        data.length ?
        <FlatList                                  //have 2 major props data and renderItem
          data={data}
          renderItem={({item})=>{
            return(
              <View style={{padding: 5 , margin:5, borderBottomColor:"black", borderBottomWidth:1}}>
                <Text style={{fontSize:20, backgroundColor:"orange"}}>Id : {item.id}</Text>
                <Text style={{fontSize:20}}>Title : {item.title}</Text>
                <Text style={{fontSize:20}}>Body : {item.body}</Text>
              </View>
            )
          }}
        /> :
        null
      }
    </View>
  );
}

export default App;
