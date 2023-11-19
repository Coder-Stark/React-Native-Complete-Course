import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = (props)=>{                         //some props are already present in navigation
  return(
    <View style={styles.homeView}>
      <Text style={{fontSize:40}}>Home Screen</Text>
      <Button title="Move to Login" onPress={()=>props.navigation.navigate("Login")}/>
    </View>
  )
}
const Login = ()=>{                            //back arrow created automatically
  return(
    <View style={styles.loginView}>
      <Text style={{fontSize:40}}>Login Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
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
  }
})
export default App;
