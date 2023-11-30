import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    main:{
      flex:1,
    },
    content:{
      flex:1,
      alignItems:"center",
    },
    homeView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    loginView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    textBox:{
      fontSize:30,
      color:'gray',
      backgroundColor:'white',
      marginBottom:5,
      padding: 5,
      borderWidth:2,
      borderColor:'black',
      borderRadius:10,
      height:50,
      width:220,
      textAlignVertical:'center',
      textAlign:'center',
    }
})