
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
 
  const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )
  


 
  
  const speak = () => {
    const speechOptions ={rate:0.75}
    const thingToSay = 'hello, welcome to our app';
    Speech.speak(thingToSay,speechOptions);
  };
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}

export default HomeScreen