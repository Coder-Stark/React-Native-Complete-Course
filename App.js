import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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
      <Text style={{fontSize: 50}}>Grid With Dyanamic Data</Text>
      <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
        {
          users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    backgroundColor:"blue",
    color:"white",
    margin:10,
    padding:3,
    borderColor: "gray",
    borderWidth:4,
    height:100,
    width:100,
    textAlign:"center",
    textAlignVertical: "center"
  }
})

export default App;
