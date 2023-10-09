import React from 'react';
import {Text, View, Button} from 'react-native';

const name = 'Shivam Kumar';
let age = 22;
var email = '123@gmail.com';

function fruit() {
  return 'apple';
}
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello React Native</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{age}</Text>
      <Text style={{fontSize: 30}}>{email}</Text>
      <Text style={{fontSize: 30}}>{fruit()}</Text>
      <Text style={{fontSize: 30}}>{100 + 20}</Text>
      <Text style={{fontSize: 30}}>{age === 22 ? 'Adult' : 'Unknown'}</Text>
      <Button title="Press me too"></Button>
    </View>
  );
};

export default App;
