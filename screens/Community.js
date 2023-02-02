import { View,ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect,useState,useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/community/PostCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const Community = () => {
    const [task,setTask] = useState("");
  const [taskItems,setTaskItems] = useState([])

  const getData = async()=>{
    let value = await AsyncStorage.getItem('tasks')
    if(value){
      setTaskItems(JSON.parse(value))
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const completeTask = (index)=>{
    let taskItemsCopy = [...taskItems]
    taskItemsCopy.splice(index,1)
    setTaskItems(taskItemsCopy)
    saveTask()
  }

  const saveTask = async()=>{
    try{
      await AsyncStorage.setItem('tasks',JSON.stringify(taskItems))
    }catch(error){
      console.log(error)
    }
  }

  const handleAddTask= async()=>{
    if(task!=""){
      //Keyboard.dismiss()
      setTaskItems([task,...taskItems])
      console.log(taskItems)
      saveTask()
      setTask("")
    }
  }
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
        <ScrollView className='mb-5'>
            
            <View className='flex-row items-center gap-5 pb-5 px-5'>
                <Image 
                source={{uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}}
                className="h-12 w-12 bg-gray-300 p-4 rounded-full"
                />
                <TextInput placeholder="What's on your mind today" className='pl-2 border-solid border-1 w-48 h-3 border-black-100 rounded-xl mb-10 justify-center' onChangeText={text=>{setTask(text)}} value={task}></TextInput>
                <TouchableOpacity className='bg-blue-300 rounded-xl w-16 h-8 items-center' onPress={()=>handleAddTask()}>
                    <Text className='pt-2'>Post</Text>
                </TouchableOpacity>
            </View>
                <View className='w-full bg-gray-300 h-0.5'></View>
                {taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <PostCard
                  name="Jash Doshi"
                  username="c0mpli"
                  time='1s'
                  profileimg='https://cdn-icons-png.flaticon.com/512/236/236832.png'
                  desc={item}/>
                </TouchableOpacity>
              )
            })}
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="Got a job🥳🥳"
            image='https://media.sciencephoto.com/c0/21/45/92/c0214592-800px-wm.jpg'
            profileimg='https://cdn-icons-png.flaticon.com/512/236/236832.png'
            />
            <PostCard 
            name="Kresha Mehta"
            username="kreshanatomy"
            time="5h"
            desc="Stay Strong!!💪"
            image='https://i.pinimg.com/474x/5c/2c/24/5c2c242ce0eea68c4240e41971e8022c.jpg'
            profileimg='https://cdn-icons-png.flaticon.com/512/201/201634.png'
            />
            <View className='h-24'></View>
        </ScrollView>
        
      
    </SafeAreaView>
  )
}

export default Community