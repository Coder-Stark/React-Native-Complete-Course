import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const App = ()=>{
  return(
    <View style={styles.main}>
      <View>
        <Text style={{fontSize:50}}>Install Package In React Native</Text>
      </View>
      <View style={styles.content}>
        <WebView
          source={{uri: 'https://linktr.ee/shivam__kumar'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  },
  content:{
    flex:1,
  }
})
export default App;
