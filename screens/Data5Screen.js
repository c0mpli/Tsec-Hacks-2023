import { View, Text } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Data5Screen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const [Skills, setSkills] = useState('')
    const saveName = async()=>{
      try{
        await AsyncStorage.setItem('Skills',JSON.stringify(Skills))
        const val = await AsyncStorage.getItem('Skills')
        console.log(val)
      }catch(error){
        console.log(error)
      }
    }
  return (
    <SafeAreaView className="p-2">

    <View>
        <Text className="text-center pt-3 text-xl font-semibold">Step 5 of 5</Text>
        <Text className="text-center pt-5 text-4xl font-bold">Enter your experiences </Text>
        <View className="pt-5">
        <TextInput
        value={Skills}
        onChangeText={(Skills)=>{setSkills(Skills)}} placeholder='Insert here' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        </View>
        <View className="h-full"></View>
    </View>
    <TouchableOpacity 
    onPress={()=>{
      saveName();
      //compile all data in pdf 
      // once combined send it to backend
      // once sent to backend shift to tick animation wala screen
      // navigation.navigate("Data5"); 
    }}
    className="absolute  bottom-40 right-0 ">
        <View className=" rounded-full w-48 h-48 "></View>
    </TouchableOpacity>

    
</SafeAreaView>
  )
}

export default Data5Screen