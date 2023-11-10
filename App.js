import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';

const App = ()=>{
  const [show, setshow] = React.useState(false);
  const displayLoader = ()=>{
    setshow(true);

    //use in api call in 3 seconds
    setTimeout(() => {
      setshow(false);
    }, 3000);
  }
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>Activity Indicator Or Loader</Text>
      </View>
      <View style={styles.content}>
        <ActivityIndicator size={70} color= "red" animating={show} />
        
        {/* same as above function  // in android we can give size anything but in ios we havet 3 choices small medium large*/}
        {
          show ? <ActivityIndicator size={"medium"} color= "green" /> : null
        }
        <Button title='Show Loader' onPress={displayLoader}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  content:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
})

export default App;
