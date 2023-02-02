import { View, Text } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {PdfCode} from "../Component/PdfCode";
import axios from 'axios'

const Data5Screen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const [Skills, setSkills] = useState('')
    const saveName = async()=>{
      try{
        await AsyncStorage.setItem('Skills',JSON.stringify(Skills))
        const val = await AsyncStorage.getItem('Skills')
        console.log(val)
      }catch(error){
        console.log(error)
      }
    }
  return (
    <SafeAreaView className="p-2">

    <View>
        <Text className="text-center pt-3 text-xl font-semibold">Step 5 of 5</Text>
        <Text className="text-center pt-5 text-4xl font-bold">Enter your experiences </Text>
        <View className="pt-5">
        <TextInput
        value={Skills}
        onChangeText={(Skills)=>{setSkills(Skills)}} placeholder='Insert here' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        </View>
        <View className="h-full"></View>
    </View>
    <TouchableOpacity 
    onPress={()=>{
      saveName();
      printToFile(); 
    }}
    className="absolute  bottom-40 right-0 ">
        <View className=" rounded-full w-48 h-48 "></View>
    </TouchableOpacity>

    
</SafeAreaView>
  )
}

const printToFile = async () => {
    let html = PdfCode();
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    try{
      const { uri } = await Print.printToFileAsync({
        html
      });
      console.log('File has been saved to:', uri);
      axios.post('http://192.168.0.146:5000/sendemail', {
        path:uri,
        subject:"New applicant to your job posting",
        description:"Congratulations, you have a new applicant. Here is his resume.",
        filename:"Resume.pdf"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  
      set_Name('');
      setInvoice(dateFormat(now, "ddmmyyhhMss"));
      Set_Address('');
      Set_Mobile_No('');
      
  
    }catch(err){
        Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
    }
  
  
  }

export default Data5Screen