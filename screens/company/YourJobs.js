import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


const YourJobs = () => {
    
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