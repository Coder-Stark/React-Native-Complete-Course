import React from 'react';
import {Text, View} from 'react-native';
const Header = ()=>{

  return(
    <View>
      <View>
        <Text style={{fontSize:25, textAlign:'center', padding:5,}}>UI For Add To Cart With Redux</Text>
      </View>
      <View>
        <Text style={{fontSize:25, textAlign:'right', padding:5, backgroundColor:'orange'}}>0</Text>
      </View>
      <View>

      </View>
    </View>
  );
}

export default Header;
