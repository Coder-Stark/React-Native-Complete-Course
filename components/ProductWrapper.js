import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation})=>{            //inbuild props
  const product = [
    {
        name: "Samsung",
        price: 20000,
        color: 'gray',
        Image : 'https://m.media-amazon.com/images/I/41kyuER2HjL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        name : "Apple",
        price: 30000,
        color: 'silver',
        Image: 'https://m.media-amazon.com/images/I/412CKVTe8dL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        name: 'Motorola',
        price: 10000,
        color: 'blue',
        Image: 'https://m.media-amazon.com/images/I/61bUETZj9AL._SY741_.jpg'
    }
  ]
  return(
    <View style={{flex:1}}>
        <Button title='Go To User List' onPress={()=>navigation.navigate('User')}/>
        <Header/>
        <ScrollView>
        {
          product.map((item)=><Product item={item}/>)        //passing props
        }
        </ScrollView>
    </View>
  );
}

export default ProductWrapper;
