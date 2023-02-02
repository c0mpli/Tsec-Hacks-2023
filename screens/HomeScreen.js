
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/mini';


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
    <SafeAreaView className="px-4 pt-4">
        <View>
          <View className="flex-row items-center">
          <Text className="text-xl font-semibold ">Hey, Vishesh 👋</Text>
          <View className="flex-row items-center pl-48 ">

          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}} className="w-12 h-12 rounded-full"/>
          </View>
          </View>
          <Text className="text-3xl font-bold pt-2">Lets find your</Text>
          <Text className="text-3xl font-bold ">Dream Job!</Text>

        </View>

        <ScrollView  horizontal={true} className="pt-12 gap-x-4 h-160 w-full">
          <TouchableOpacity className="pl-1 h-full py-10 bg-[#0A2647] rounded-3xl ">
            <View className=" h-96  flex items-center rounded-3xl w-96 bg-[#0A2647]">
              <View className="p-2 pt-8">
              <Image className="w-28 h-28" source={{uri:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"}}/>
              </View>
              <Text className="text-3xl pt-2 text-white font-bold">UX/UI Designer</Text>
              <View className="flex-row pt-2 items-center gap-x-1">
                <MapPinIcon color={"gray"}/> 
                <Text className="text-xl text-gray-500 font-bold">Bandra West</Text>
              </View>
              <View className="flex-row items-center pb-4 pt-6 gap-x-5">
                <Text className="text-2xl font-semibold text-white">• Full Time</Text>
                <Text className="text-2xl font-semibold text-white">• Remote</Text>
                <Text className="text-2xl font-semibold text-white">• 6 LPA</Text>
              </View>
              <View className="h-14   w-80 bg-[#0A2647] rounded-full">
                  <Text className="text-center text-white pt-3 font-bold text-2xl">Click for more details</Text>
              </View>

            </View>

          </TouchableOpacity>

          <TouchableOpacity className="pl-1 h-full py-10 bg-[#0A2647] rounded-3xl ">
            <View className=" h-96  flex items-center rounded-3xl w-96 bg-[#0A2647]">
              <View className="p-2 pt-8">
              <Image className="w-28 h-28" source={{uri:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"}}/>
              </View>
              <Text className="text-3xl pt-2 text-white font-bold">UX/UI Designer</Text>
              <View className="flex-row pt-2 items-center gap-x-1">
                <MapPinIcon color={"gray"}/> 
                <Text className="text-xl text-gray-500 font-bold">Bandra West</Text>
              </View>
              <View className="flex-row items-center pb-4 pt-6 gap-x-5">
                <Text className="text-2xl font-semibold text-white">• Full Time</Text>
                <Text className="text-2xl font-semibold text-white">• Remote</Text>
                <Text className="text-2xl font-semibold text-white">• 6 LPA</Text>
              </View>
              <View className="h-14   w-80 bg-[#0A2647] rounded-full">
                  <Text className="text-center text-white pt-3 font-bold text-2xl">Click for more details</Text>
              </View>

            </View>

          </TouchableOpacity>

        </ScrollView>


    </SafeAreaView>
  )
}

export default HomeScreen