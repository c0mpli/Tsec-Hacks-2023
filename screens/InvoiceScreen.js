import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {PdfCode} from "../Component/PdfCode";











const InvoiceScreen = () => {
  const [name, set_Name] = useState("");
  const [Address, Set_Address] = useState("");
  const [Mobile_No, Set_Mobile_No] = useState("");
  return (
    <View className="space-y-8">
       

          <TouchableOpacity className=" w-full  bg-blue-400" onPress={printToFile}>
            <Text>GO</Text>

          </TouchableOpacity>
    </View>
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
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });

    set_Name('');
    setInvoice(dateFormat(now, "ddmmyyhhMss"));
    Set_Address('');
    Set_Mobile_No('');
    

  }catch(err){
      Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
  }


}

export default InvoiceScreen