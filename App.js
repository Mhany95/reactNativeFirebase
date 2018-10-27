/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {Stack} from './components/navigation/Navigation'

export default class App extends Component {
 
    render(){
      return(
          <Stack />
      );
    }
}

