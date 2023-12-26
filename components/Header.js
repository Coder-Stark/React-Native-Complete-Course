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
        <Text style={{fontSize:25, textAlign:'center', padding:5,}}>Call API With Saga</Text>
        {/* Redux Saga, which is used to manage side effects in your application. Side effects are 
        operations that occur outside of the typical Redux flow, such as asynchronous tasks like 
        fetching data, interacting with APIs, or handling timeouts. Redux Saga provides a way to 
        handle these side effects more effectively by using ES6 generators. */}
      </View>
      <View>
        <Text style={{fontSize:25, textAlign:'right', padding:5, backgroundColor:'orange'}}>Items Added : {cartItems}</Text>
      </View>
    </View>
  );
}

export default Header;
