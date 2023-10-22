import React from 'react';
import {Text, View, FlatList} from 'react-native';
import UsersData from './components/UsersData';

const App = () => {
const users = [
    {
      id: 1,
      name: "Shivam",
      email:"shiv@gmail.com"
    },
    {
      id: 2,
      name: "Aditya",
      email:"adi@gmail.com"
    },
    {
      id: 3,
      name: "Satyam",
      email:"satyam@gmail.com"
    },
    {
      id: 4,
      name: "Vikas",
      email:"vikas@gmail.com"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 50}}>Component In Loop With FlatList</Text>
      <FlatList
        data={users}

        /*same as below
        renderItem={({item})=><View style={styles.box}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
        </View>}
        */

        renderItem={({item})=> <UsersData item={item}/>}      //item={item} => passing props
      />
    </View>
  );
};

export default App;
