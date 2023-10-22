import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: "Shivam"
    },
    {
      id: 2,
      name: "Aditya"
    },
    {
      id: 3,
      name: "Satyam"
    },
    {
      id: 4,
      name: "Vikas"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 50}}>List With Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:30,
    backgroundColor:"blue",
    color:"white",
    margin:10,
    padding:10,
    borderColor: "gray",
    borderWidth:4
  }
})

export default App;
