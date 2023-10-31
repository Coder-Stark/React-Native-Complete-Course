import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';

const App = ()=>{
  const[count, setCount] = useState(0);
  const[data, setData] = useState(100);

  //useEffect on states
  useEffect(()=>{
    console.warn("When Count State is Updated");
  },[count]);                            //if [count] is not there then this effect work on both buttons for multiple we can use [count, name ,age]

  useEffect(()=>{
    console.warn("When Data State is Updated");
  },[data]);
  return(
    <View>
      <Text style={{fontSize:50}}>Life Cycle with UseEffect</Text>
      <Text style={{fontSize:20, color: "red"}}>For using life cycles methods in functional components we use useEffect hooks</Text>
      <Text style={{fontSize:30, color:"green"}}>UseEffect as CompononetDidUpdate | {count} | {data}</Text>
      <Text style={{fontSize:30, color:"blue"}}>UseEffect on States</Text>
      <Text style={{fontSize:30, color: "violet"}}>Count : {count}</Text>
      <Text style={{fontSize:30, color: "violet"}}>Data : {data}</Text>
      <Button title='Update Count' onPress={()=>setCount(count+1)} color={'green'} />
      <Button title='Update Data' onPress={()=>setData(data+1)}/>

      <User info={{count, data}}/>
    </View>
  );
}

const User = (props) =>{
  useEffect(()=>{
    console.warn("When Count Props is Updated");
  },[props.info.count]);

  useEffect(()=>{
    console.warn("When Data Props is Updated");
  },[props.info.data]);
  return(
    <View>
      <Text style={{fontSize:30, color: "orange"}}>UseEffect on Props</Text>
      <Text style={{fontSize:30, color: "violet"}}>Count : {props.info.count}</Text>
      <Text style={{fontSize:30, color: "violet"}}>Data : {props.info.data}</Text>
    </View>
  );
}

export default App;
