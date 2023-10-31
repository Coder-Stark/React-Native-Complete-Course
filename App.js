import React, { useEffect, useState } from 'react';
import {Button, Text, View} from 'react-native';

const App = ()=>{
  const [show, setShow] = useState(true);
  return(
    <View>
      <Text style={{fontSize:50}}>UseEffect For Unmount Component</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)}/>
      {
        show ? <Student/> : null
      }
    </View>
  );
}

//after hiding it means it will Unmount Life cycle method
const Student = () => {
  let timer = setInterval(()=>{
    console.warn("Timer Called");
  }, 2000)

  useEffect(()=>{
    // console.warn("UseEffect Call on Unmount");                    //reverse of below(when shows then warn)
    // return ()=>{
    //   console.warn("UseEffect Call on Unmount");                    //when not shows(unmount) then warn
    // }    
    return()=>clearInterval(timer);                                   //for stop background usage
  });

  return(
    <View>
      <Text style={{fontSize: 30, color: "orange", margin: 20 , textAlign:'center'}}>Student component shows after Clicking Toggle Button</Text>
      <Text style={{fontSize: 30, color: "violet", margin: 20 , textAlign:'center'}}>If again Click on Toggle button The Timer is also Stops</Text>
    </View>
  );
}

export default App;
