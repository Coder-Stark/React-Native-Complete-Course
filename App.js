import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

const App = ()=>{
  const [show, setShow] = useState(false);
  return(
    <View>
      <Text style={{fontSize:50}}>Show/Hide or Toggle Component</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)}/>
      {
        show ? <User/> : null
      }
    </View>
  );
}

//after hiding it means it will Unmount Life cycle method
const User = () => {
  return(
    <View>
      <Text style={{fontSize: 30, color: "orange", margin: 20 , textAlign:'center'}}>User component shows after Clicking Toggle Button</Text>
    </View>
  );
}

export default App;
