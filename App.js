import React , {Component}from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Students from './components/StudentsCC';
class App extends Component {
  fruit=()=>{
    console.warn("Apple");
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 50}}>Class Component In React Native</Text>
        <TextInput
          placeholder='Enter Your name'
        />
        <Button title='Press Me' onPress={this.fruit}/>
        <Students/>
      </View>
    )
  }
}


export default App;
