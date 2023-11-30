import React from 'react';
import {Button, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./components/Home";
import {Login} from "./components/Login";

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

export default App;
