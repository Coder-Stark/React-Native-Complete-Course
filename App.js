import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

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
    },
    {
      id: 5,
      name: "Tony"
    },
    {
      id: 6,
      name: "Joker"
    },
    {
      id: 7,
      name: "Bruce"
    },
    {
      id: 8,
      name: "Captain"
    },
    {
      id: 9,
      name: "Wanda"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 50}}>List With Map Functions</Text>
      <ScrollView style={{marginBottom:30}}>
      {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
      }
      </ScrollView>
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
