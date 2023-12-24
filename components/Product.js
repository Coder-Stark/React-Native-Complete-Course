import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
const Product = (props) => {
  const item = props.item;
  const disPatch = useDispatch();
  const handleAddToCart = (item) => {
    console.warn('called', item);
    disPatch(addToCart(item));                               //addToCart(item) not work directly we have to dispatch using useDispatch in redux
  }
  return (
    <View style={{padding: 10, alignItems: 'center', borderBottomColor: 'green', borderBottomWidth: 2}}>
      <Text style={{fontSize: 20}}>Name: {item.name}</Text>
      <Text style={{fontSize: 20}}>Price: {item.price}</Text>
      <Text style={{fontSize: 20}}>Color: {item.color}</Text>
      <Image
        style={{width: 100, height: 100, padding: 10}}
        source={{uri: item.Image}}
      />
      <View style={{margin: 5, padding: 5}}>
        <Button title="Add To Cart"  onPress={()=>handleAddToCart(item)}/>
      </View>
    </View>
  );
};

export default Product;
