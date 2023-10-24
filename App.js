import React , {Component}from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Students from './components/StudentsCC';
class App extends Component {
  //for calling parent classes's constructor we use super() key word
  constructor(){
    super();
    this.state={
      name:"Shivam",
      age: "22"
    }
  }

  updateName(val){
    this.setState({name: val});
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 50}}>State And Props In Class Component</Text>

        <Text style={{fontSize: 20}}>{this.state.name}  {this.state.age}</Text>
        <TextInput
          placeholder='Enter Your name'
          onChangeText={(text)=>this.updateName(text)}
        />
        <Button title='Press Me'/>
        <Students name={this.state.name}/>
      </View>
    )
  }
}


export default App;
