import { View, Text ,Image} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const RepeatAfterMe = () => {
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  }))
  return (
    <>
    <View className='flex-row gap-5 pt-15 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>My name is Raj Verma.</Text>
    </View>
    <View className='flex-row gap-5 pt-5 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>I am 10 years old.</Text>
    </View>
    <View className='flex-row gap-5 pt-5 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>I live in Mumbai.</Text>
    </View>
    
    </>
  )
}

export default RepeatAfterMe