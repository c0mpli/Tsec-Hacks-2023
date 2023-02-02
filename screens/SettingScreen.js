import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import swiper from 'react-native-deck-swiper'
import Swiper from 'react-native-deck-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { CalendarIcon, HomeIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini';


const data =[
    {
        firstname:"Kresha",
        lastname:"Mehta",
        occupation:"student",
        age:"20",
        PhotoURL:"https://img.freepik.com/premium-photo/lhasa-apso-4-years-old-dog-portrait-isolated_191971-1661.jpg?w=2000",
        id: 123,
        quote:"It doesnot matter how slowly you go as long as you dont stop"
    },
    {
        firstname:"Sanjay",
        lastname:"Mehta",
        occupation:"student",
        age:"20",
        PhotoURL:"https://petlandbeavercreek.com/wp-content/uploads/2022/04/2325560_800.jpg",
        id: 123,
        quote:"Your goals are the roadmaps that will guide you and show you what is possible for your life"
    },
    {
        firstname:"rekha",
        lastname:"Mehta",
        occupation:"student",
        age:"20",
        PhotoURL:"https://img.freepik.com/premium-photo/lhasa-apso-4-years-old-dog-portrait-isolated_191971-1661.jpg?w=2000",
        id: 123,
        quote:"A bend in the road is not the end of the road. Unless you fail to make the turn."
    },
    {
        firstname:"vishesh",
        lastname:"Mehta",
        occupation:"student",
        age:"20",
        PhotoURL:"https://img.freepik.com/premium-photo/lhasa-apso-4-years-old-dog-portrait-isolated_191971-1661.jpg?w=2000",
        id: 123,
        quote:"There is no greater disability in society than the inability to see a person as more"
    },
];


const SettingScreen = () => {
    const navigation= useNavigation();
    useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )
  return (
    <SafeAreaView >
        <View  >
      <Swiper 
      stackSize={5}
      cardIndex={0}
      animateCardOpacity
      verticalSwipe={false}
      containerStyle={{ backgroundColor: "transparent" }}
      cards={data}
      renderCard={(card) => (
        <View key={card.id} className=" bg-[#0A2647]  relative  h-3/4  rounded-xl">
            
            <Text className="text-white text-5xl pt-32 font-bold px-8 text-center">
                {card.quote}
             </Text>
            
        </View>  
     )} 
      />
      <View className="h-full"></View>
        </View>
        <View className="absolute bottom-0 left-0 space-x-9  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Home")}}
    className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Progress")}}>
      <CalendarIcon size={36} color={"#0A2647"}/>
      <Text>FreeLancing</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Commu")}}>
      <SquaresPlusIcon size={36} color={"#0A2647"}/>
      <Text>Community</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      navigation.navigate("User Details");
    }} className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>For You</Text>
    </TouchableOpacity>
    
</View>
    </SafeAreaView>
  )
}

export default SettingScreen