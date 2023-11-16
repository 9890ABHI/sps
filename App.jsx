/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
} from 'react-native';

import Index from './src/Screens/Index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/Screens/auth/Login';



const App =() => {

  
  return (<>

      <NavigationContainer>
    {/* <SafeAreaView>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
        /> */}

       
      <Index />
       
    {/* </SafeAreaView> */}
        </NavigationContainer>
            </>
  );

}

const styles = StyleSheet.create({
});

export default App;
