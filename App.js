import React from 'react';
import {Button, Text, View} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';

// components are always have first letter capital
const App = () => {
  const fruit = (val)=>{
    console.warn(val);
  }


  let data = 100;
  const vege = (val)=>{
    data = 200;
    console.warn(data);
  }
  return (
    <View>
      <Text style={{fontSize: 50}}>Button and On Press Event</Text>
      {/* for not parameter pass */}
      <Button title='On Press' onPress={fruit} color={'green'}/>   
      {/* for parameter pass*/}
      <Button title="On Press 2" onPress={()=>fruit('Hello Shivam')} color={'red'}/> 


      {/* why we use state ,because the data is not updated in style tag */}
      <Text style={{fontSize: 50}}>{100}</Text>
      {/* for not parameter pass */}
      <Button title='On Press' onPress={vege} color={'blue'}/>   
      {/* for parameter pass*/}
      <Button title="On Press 2" onPress={()=>vege('Hello Shivam')} color={'black'}/>        
    </View>
  );
};

export default App;
