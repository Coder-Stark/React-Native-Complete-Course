import React from 'react';
import {Text, View} from 'react-native';
const App = ()=>{

  return(
    <View>
      <Text style={{fontSize:50}}>Redux With React Native</Text>
      <Text style={{fontSize:25, color:'red'}}>Redux is a predictable state container library primarily used with React to manage the application's state. It serves as a centralized store for the entire application's state, making it easier to manage and update data across different components.</Text>
      <Text style={{fontSize:30, color:'orange'}}>Key concepts in Redux:</Text>
      <Text style={{fontSize:30, color:'green'}}>1. Store</Text>
      <Text style={{fontSize:30, color:'green'}}>2. Actions</Text>
      <Text style={{fontSize:30, color:'green'}}>3. Reducers</Text>
      <Text style={{fontSize:30, color:'green'}}>4. Dispatch</Text>
      <Text style={{fontSize:30, color:'green'}}>5. Selectors</Text>
    </View>
  );
}

export default App;
