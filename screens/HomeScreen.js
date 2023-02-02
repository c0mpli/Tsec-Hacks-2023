
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useEffect, useState } from 'react';


const HomeScreen = () => {
 

  


 
  
  const speak = () => {
    const speechOptions ={rate:0.75}
    const thingToSay = 'hello, welcome to our app';
    Speech.speak(thingToSay,speechOptions);
  };
  return (
    <View>
      <Text className="text-red-600">Home sdf</Text>
      <Button title="Press to hear some words" onPress={speak} />
      
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen