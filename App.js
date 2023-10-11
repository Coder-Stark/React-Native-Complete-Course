import React from 'react';
import {Text, View} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';

// components are always have first letter capital
const App = () => {
  return (
    <View>
      <CompanyData/>
      <Text style={{fontSize: 50}}>Components</Text>
      <UserData/>
    </View>
  );
};

export default App;
