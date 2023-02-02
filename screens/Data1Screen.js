import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';



const Data1Screen = () => {
    const speak = () => {
        const speechOptions ={rate:0.75,language:"en-GB"}
        const thingToSay = 'Please enter your name.....  Once done, click on bottom right corner';
        Speech.speak(thingToSay,speechOptions);
      };
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    }),speak()
    )
    const [Name, setName] = useState('')
    const saveName = async()=>{
        try{
          await AsyncStorage.setItem('Name',JSON.stringify(Name))
          const val = await AsyncStorage.getItem('Name')
          console.log(val)
        }catch(error){
          console.log(error)
        }
      }
  return (
    <SafeAreaView className="p-2">

    <View>
        <Text className="text-center pt-3 text-xl font-semibold">Step 1 of 5</Text>
        <Text className="text-center pt-5 text-4xl font-bold">What is your name?</Text>
        <View className="pt-5">
        <TextInput
        value={Name}
        onChangeText={(Name) => {
            setName(Name)
          }}
        placeholder='Enter your name' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        </View>
        <View className="h-full"></View>
    </View>
    <TouchableOpacity 
onPress={()=>{navigation.navigate("Data2"); saveName();}}
    className="absolute  bottom-40 right-0 ">
        <View className=" rounded-full w-48 h-48 "></View>
    </TouchableOpacity>

    
</SafeAreaView>
  )
}


export default Data1Screen