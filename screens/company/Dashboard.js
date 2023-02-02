import { View, Text,Image  } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView className="">
      <View className='flex-row pt-3 items-center mx-3 space-x-2'>
        <Image 
        source={{uri:'https://links.papareact.com/wru'}}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className=''>
            <Text className='font-bold text-gray-400 text-sm'>Welcome back</Text>
            <Text className='font-bold text-xl'>Udaan</Text>
        </View>
      </View> 

    </SafeAreaView>
    
  )
}

export default Dashboard