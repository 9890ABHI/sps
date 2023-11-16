import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Home from './Home/home';
import {Course, Metting, Student, TimeTable, UpdateEmail} from './Home/Student';


const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
      
    // <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="TimeTable" component={TimeTable} />
        <Stack.Screen name="Metting" component={Metting} />
        <Stack.Screen name="UpdateEmail" component={UpdateEmail} />
      </Stack.Navigator>
    //   </NavigationContainer>
      // <Home/> 
    
  )
}

export default Index