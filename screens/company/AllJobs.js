import { View, Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import React,{useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const AllJobs = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
      <Text>AllJobs</Text>
    </SafeAreaView>
  )
}

export default AllJobs