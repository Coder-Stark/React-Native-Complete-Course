import React , {Component} from 'react';
import {Text,View} from 'react-native';

class Students extends Component {
  render(){
    console.warn(this.props)
    return(
      <View>
        <Text style={{fontSize: 30}}>Student Class : {this.props.name}</Text>
      </View>
    )
  }
}

export default Students;
