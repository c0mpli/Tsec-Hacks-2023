import { View, Text , Image, ScrollView} from 'react-native'
import React from 'react'

const PostCard = (props) => {
  return (
    <>
    <ScrollView>
    <View className='flex-row gap-5 mt-2 px-5'>
        <Image 
        source={{uri:props.profileimg}}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className=''>

            <View className='flex-row justify-between'>
              <View className='flex-row gap-1'>

                <Text className='font-bold'>{props.name}</Text>
                <Text className='text-gray-400'>@{props.username}</Text>
                <Text className='text-gray-400'>{props.time}</Text>
              </View>
                <View>
                <Text>...</Text>
                </View>
            </View>
            <Text className='mt-1'>{props.desc}</Text>
            <Image 
            source={{uri:props.image}}
            className={props.image?"h-64 w-64 mt-5 bg-gray-300 p-4 rounded-xl":""}
            />
            
            <View className='flex-row justify-between px-5 pt-2'>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1947/1947247.png'}} className='h-5 w-5'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2951/2951188.png'}}
              className='h-6 w-6'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}}
              className='h-4 w-4 mt-1'/>
            </View>
        </View>
    </View>
    <View className='w-full bg-gray-300 h-0.5 mt-5'></View>
    </ScrollView>
    </>
  )
}

export default PostCard