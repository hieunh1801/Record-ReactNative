/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import VoiceTest from './components/VoiceTest'
import AudioTest from './components/AudioTest';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (    
      <AudioTest/>
    );
  }
}