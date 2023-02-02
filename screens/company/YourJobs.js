import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {axios} from 'axios' 


const YourJobs = () => {
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
    
  return (
    <View>
        <TouchableOpacity className='justify-center p-32' onPress={fetchData}>
      <Text>YourJobs</Text>
        </TouchableOpacity>
    </View>
  )
  }

export default YourJobs