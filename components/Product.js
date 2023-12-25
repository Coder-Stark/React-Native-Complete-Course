import React, { useEffect, useState } from 'react';
import {Text, View, Image, Button} from 'react-native';
import { addToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
const Product = (props) => {
  const item = props.item;
  const disPatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = (item) => {
    // console.warn('called', item);
    disPatch(addToCart(item));                               //addToCart(item) not work directly we have to dispatch using useDispatch in redux
  }
  useEffect(() => {
    if(cartItems && cartItems.length){
      cartItems.forEach((element) => {
        // console.warn(element);
        if(element.name == item.name){
          setIsAdded(true);
        }
      });
    }
  })
  return (
    <View style={{padding: 10, alignItems: 'center', borderBottomColor: 'green', borderBottomWidth: 2}}>
      <Text style={{fontSize: 20}}>Name: {item.name}</Text>
      <Text style={{fontSize: 20}}>Price: {item.price}</Text>
      <Text style={{fontSize: 20}}>Color: {item.color}</Text>
      <Image
        style={{width: 100, height: 100, padding: 10}}
        source={{uri: item.Image}}
      />
      {
        isAdded ? 
        <View style={{margin: 5, padding: 5}}>
          <Button title="Remove To Cart"  onPress={()=>handleAddToCart(item)}/>
        </View> :
        <View style={{margin: 5, padding: 5}}>
          <Button title="Add To Cart"  onPress={()=>handleAddToCart(item)}/>
        </View>

      }
    </View>
  );
};

export default Product;
