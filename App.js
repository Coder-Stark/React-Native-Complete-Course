import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
const App = ()=>{
  const [data, setData] = useState(undefined);
  const getAPIData = async()=>{
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    setData(result);
  }
  useEffect(()=>{
    getAPIData();
  },[]);                        //[] = for calling only once
  return(
    <View>
      <Text style={{fontSize:50, textAlign:"center"}}>API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize:25, padding: 5 , margin:5, fontWeight:"bold"}}>Fetched Data</Text>
          <Text style={{fontSize:25, padding: 5 , margin:5}}>ID : {data.id}</Text>
          <Text style={{fontSize:25, padding: 5 , margin:5}}>UserID : {data.userId}</Text>
          <Text style={{fontSize:25, padding: 5 , margin:5}}>Title : {data.title}</Text>
          <Text style={{fontSize:25, padding: 5 , margin:5}}>Body : {data.body}</Text>
        </View> : null
      }
    </View>
  );
}


export default App;
