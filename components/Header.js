import React , {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Header = ()=>{
  const cartData = useSelector((state)=>state.reducer);       //state.xyz (store file)
  // console.warn(cartData);
  const [cartItems, setCartItems] = useState(0);
  useEffect(()=>{
    setCartItems(cartData.length);
  }, [cartData]);
  return(
    <View>
      <View>
        <Text style={{fontSize:25, textAlign:'center', padding:5,}}>Remove To Cart</Text>
      </View>
      <View>
        <Text style={{fontSize:25, textAlign:'right', padding:5, backgroundColor:'orange'}}>Items Added : {cartItems}</Text>
      </View>
    </View>
  );
}

export default Header;
