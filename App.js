import React from 'react';
import {SectionList, Text, View} from 'react-native';

const App = () => {
const users = [
    {
      id: 1,
      name: "Shivam",
      data:["ReactJs", "NextJs", "MongoDB", "C++"]
    },
    {
      id: 2,
      name: "Aditya",
      data:["Business", "finance", "communicatio"]
    },
    {
      id: 3,
      name: "Satyam",
      data:["Business", "Factory", "Dye"]
    },
    {
      id: 4,
      name: "Vikas",
      data:["Neet", "Mbbs", "BDS"]
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 50}}>Section List in React Native</Text>
      <SectionList 
        sections={users}
        renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=><Text style={{fontSize:30, color:"red"}}>{name}</Text>}
      />
    </View>
  );
};

export default App;
