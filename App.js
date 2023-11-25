import React from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
const App = ()=>{
  const btnAction = ()=>{
    console.warn("Button Pressed")
  }
  return(
    <NavigationContainer>
      <Stack.Navigator
          //for all screens connected like login or home both
          screenOptions={{
            //down code is for individual screen
            headerStyle:{
              backgroundColor:"orange"
            },
            headerTitle:()=><Button title='Left' onPress= {btnAction}/>,        //for adding in left part of navbar
            // headerRight:()=><Button title='Right' onPress={btnAction}/>,        //for adding in right part of navbar
            headerRight:()=><Search/>,                                                    //for calling component
            headerTitleStyle:{
              color:"white",
              fontSize:30,
            }
          }}
          >
        <Stack.Screen name="Home" component={Home} options={{
          //down code is for individual screen
          title:"Home Screen",  
          headerStyle:{
            backgroundColor:"purple"
          },
          headerTitleStyle:{
            color:"white",
            fontSize:30,
          }
        }}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Search = ()=>{
  return(
    <TextInput placeholder='Search' placeholderTextColor={"white"}/>
  )
}
const Home = (props)=>{                         //some props are already present in navigation
  return(
    <View style={styles.homeView}>
      <Text style={{fontSize:30}}>Button and Component in Stack Navigation</Text>
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
