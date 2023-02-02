import { View,ScrollView, Text, TextInput, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/community/PostCard'

const Community = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
        
            <View className='pt-5 pb-5 justify-center items-center'>
                <Text className='font-bold'>Community</Text>
            </View>
        <ScrollView className='px-5 mb-5'>
            <View className='flex-row'>
            <Image 
            source={{uri:'https://links.papareact.com/wru'}}
            className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <TextInput placeholder="What's on your mind today" className='pl-2 border-solid border-1 w-48 h-3 border-black-100 rounded-xl mb-10'></TextInput>
            </View>
            
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="this is a sample test message"
            />
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="this is a sample test message"
            />
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="this is a sample test message"
            />
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="this is a sample test message"
            />
            <View className='h-24'></View>
        </ScrollView>
        
      
    </SafeAreaView>
  )
}

export default Community