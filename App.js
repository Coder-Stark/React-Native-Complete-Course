import React, { useState }  from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetFormData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  }

  return (
    <View>
      <Text style={{fontSize: 50}}>Simple Form in React Native</Text>

      <TextInput
        style = {styles.textInput}
        placeholder='Enter User Name'
        value={name}
        onChangeText={(text)=>setName(text)}
      />

      <TextInput
        style = {styles.textInput}
        placeholder='Enter Email Id'
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />

      <TextInput
        style = {styles.textInput}
        placeholder='Enter Your Password'
        value={password}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry = {true}
      />

      <View style={{marginBottom:10}}>
        <Button color={'green'} 
        title='Show Details' 
        onPress={()=>setDisplay(true)}
        />
      </View>

        {/* style={{margin:10}} not allowed in below line */}
      <Button title='Clear Details' 
      onPress={resetFormData}
      />

      <View>
        {
          display ?
          <View>
            <Text style={{fontSize: 18}}>User Name is : {name}</Text>
            <Text style={{fontSize: 18}}>Email Id is : {email}</Text>
            <Text style={{fontSize: 18}}>Your Password is : {password}</Text>
          </View>
          : null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput : {
    fontSize : 18,
    borderColor : 'blue',
    borderWidth: 2,
    margin : 10
  }
})

export default App;
