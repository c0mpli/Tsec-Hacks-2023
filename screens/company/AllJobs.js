import { View, Text, Image, TextInput } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import React,{useEffect, useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { TouchableOpacity } from 'react-native'
import JobCard from '../../components/community/JobCard';

const AllJobs = () => {
  const [jobs,setJobs] = useState()
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

}
    async function fetchData(){
        axios
        .get("http://192.168.0.143:5000/alljobs",headers)
        .then(function (response) {
            setJobs(response.data.jobs);
            console.log(jobs)
        })
        .catch(error => console.log(error));

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
    <View className='items-start'>
      <View>
      <TextInput placeholder='Search Jobs' className='pb-5 bg-gray-300 w-64 rounded-full text-center	pt-5' ></TextInput>
      </View>
        
      {

        jobs && jobs.map(data=>{
          return(
            <>
          <JobCard
          image={data.image}
          name={data.companyName}
          jobTitle={data.jobTitle}
          jobdesc={data.jobDescription}
          location={data.location}
          pay={data.pay}
          />   
          </>)
          
        })
      }
      </View>
    </SafeAreaView>
  )
}

export default AllJobs