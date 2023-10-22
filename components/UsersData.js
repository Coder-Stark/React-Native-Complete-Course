import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UsersData = (props)=>{
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    flex:1,
    color:"orange",
    margin:2,
    textAlign:"center"
  },
  box:{
    flexDirection:"row",
    borderWidth:2,
    borderColor:"green",
    marginBottom:5
  }
})

export default UsersData;