import { View, Text , Image, ScrollView} from 'react-native'
import React from 'react'

const PostCard = (props) => {
  return (
    <>
    <ScrollView>
    <View className='flex-row gap-5 mb-5 border-y-2 border-black'>
        <Image 
        source={{uri:'https://links.papareact.com/wru'}}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className=''>

            <View className='flex-row gap-1'>
                <Text className='font-bold'>{props.name}</Text>
                <Text className='text-gray-400'>@{props.username}</Text>
                <Text className='text-gray-400'>{props.time}</Text>
            </View>
            <Text>{props.desc}</Text>
            <Image 
            source={{uri:'https://links.papareact.com/wru'}}
            className="h-40 w-56 mt-5 bg-gray-300 p-4"
            />
        </View>
    </View>
    </ScrollView>
    </>
  )
}

export default PostCard