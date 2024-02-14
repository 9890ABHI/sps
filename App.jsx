/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Index from './src/Screens/Index';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';

const App =() => {

  return (<>
  <Provider store={store}>
      <NavigationContainer> 
      <Index />
      </NavigationContainer>
  </Provider>
            </>
  );

}

const styles = StyleSheet.create({
});

export default App;
