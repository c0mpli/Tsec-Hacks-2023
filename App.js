import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Data1Screen from './screens/Data1Screen';
import Data2Screen from './screens/Data2Screen';
import Data3Screen from './screens/Data3Screen';
import Data4Screen from './screens/Data4Screen';

import Data5Screen from './screens/Data5Screen';

import Dashboard from './screens/company/Dashboard';
import Community from './screens/Community';

import AllJobs from './screens/company/AllJobs';

import InvoiceScreen from './screens/InvoiceScreen';
import Ani2Screen from './screens/Ani2Screen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator>

    <Stack.Screen name="Ani2" 
    component={Ani2Screen} 
    options={{presentation:'fullScreenModal', headerShown:false}}
    />
    <Stack.Screen name="AllJ" component={AllJobs} />

    <Stack.Screen name="Data5" component={Data5Screen} />
    <Stack.Screen name="Invoice" component={InvoiceScreen} />
    
    <Stack.Screen name="Commu" component={Community} />
    <Stack.Screen name="Data1" component={Data1Screen} />
    <Stack.Screen name="Data3" component={Data3Screen} />
    
    <Stack.Screen name="Data2" component={Data2Screen} />
    <Stack.Screen name="Data4" component={Data4Screen} />
    
    
    <Stack.Screen name="Home" component={HomeScreen} />

        
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


