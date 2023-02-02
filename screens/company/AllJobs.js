import { View, Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import React,{useEffect, useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {axios} from 'axios' 
import { TouchableOpacity } from 'react-native'

const AllJobs = () => {
  const [jobs,setJobs] = useState()
    async function fetchData(){
        try {
            const res = await axios.get(`/alljobs`);
            console.log("hello")
          } catch (error) {
            console.log(error)
          } 
    } 

    useEffect(() => {
        fetchData()
    }, [])
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
        <View>
        <TouchableOpacity className='justify-center p-32' onPress={fetchData}>
      <Text>YourJobs</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default AllJobs