import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import Register from './register/register';
import Dashboard from './profilescreen';
import HomeScreen from './screen/homescreen';
// import Dashboard from './dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
   
  );
}