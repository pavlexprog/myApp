import React from 'react';
import { Home } from './Home';
import FullPost from './FullPost';
import { View, StatusBar } from 'react-native';



 
export default function App() {
  
   

  return (
    <SafeAreaView style={{ flex:1}}>
    <View>
        {/* <Home/> */}
        <FullPost/>

      <StatusBar theme="auto"/>
    </View>
    </SafeAreaView>
  ); 
}



