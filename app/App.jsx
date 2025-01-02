import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import Register from './register/register';
import Dashboard from './profilescreen';
import DonationScreen from './screen/DonationScreen';
import HomeScreen from './screen/homescreen';
import CommunityScreen from './screen/CommunityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DonationScreen" component={DonationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      </Stack.Navigator>

  
  );
}