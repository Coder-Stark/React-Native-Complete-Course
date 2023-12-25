import React, { useEffect, useState } from 'react';
import {Text, View, Image, Button} from 'react-native';
import { addToCart, removeFromCart } from './redux/action';
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
  const handleRemoveFromCart = (item) => {
    // console.warn(item);
    disPatch(removeFromCart(item.name));
  }
  
  useEffect(() => {
    //if item not match then add to cart else remove
    let result = cartItems.filter((element) => {
      return element.name == item.name;
    })
    if(result.length){
      setIsAdded(true);
    }else{
      setIsAdded(false);
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
          <Button title="Remove From Cart"  onPress={()=>handleRemoveFromCart(item)}/>
        </View> :
        <View style={{margin: 5, padding: 5}}>
          <Button title="Add To Cart"  onPress={()=>handleAddToCart(item)}/>
        </View>

      }
    </View>
  );
};

export default Product;
