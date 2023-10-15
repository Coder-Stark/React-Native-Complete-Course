import {StyleSheet} from 'react-native';

/* //also working
export default ExStyles=StyleSheet.create({
    textBox:{
      fontSize:30,
      color:'gray',
      backgroundColor:'blue',
      marginBottom:10,
      padding:10,
      borderWidth:2,
      borderColor:'red',
      borderRadius:10,
      height:100,
      textAlignVertical:'center',
      textAlign:'center',
    },
});
*/

//correct way
const ExStyles = StyleSheet.create({
    textBox:{
      fontSize:30,
      color:'gray',
      backgroundColor:'blue',
      marginBottom:10,
      padding:10,
      borderWidth:2,
      borderColor:'red',
      borderRadius:10,
      height:100,
      textAlignVertical:'center',
      textAlign:'center',
    },
});

export default ExStyles;
