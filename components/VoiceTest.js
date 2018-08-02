import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TouchableHighlight, TouchableOpacity
} from 'react-native';

import Voice from 'react-native-voice';

export default class VoiceTest extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
    };
    
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
    try {
      await Voice.start('v');
    } catch (e) {
      console.log("Lỗi rồi");
    }
    console.log("Start Record");
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.log("Lỗi rồi");
    }
    console.log("Stop Record");
    console.log(this.state);
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.log("Lỗi rồi");
    }
    console.log("Cancle record");
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.log("Lỗi rồi");
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
    console.log("Destroy record");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Voice!
        </Text>
        <Text style={styles.instructions}>
          Press the button and start speaking.
        </Text>
        <Text
          style={styles.stat}>
          {`Started: ${this.state.started}`}
        </Text>
        <Text
          style={styles.stat}>
          {`Recognized: ${this.state.recognized}`}
        </Text>
        <Text
          style={styles.stat}>
          {`Pitch: ${this.state.pitch}`}
        </Text>
        <Text
          style={styles.stat}>
          {`Error: ${this.state.error}`}
        </Text>
        <Text
          style={styles.stat}>
          Results
        </Text>
        {this.state.results.map((result, index) => {
          return (
            <Text
              key={`result-${index}`}
              style={styles.stat}>
              {result}
            </Text>
          )
        })}
        <Text
          style={styles.stat}>
          Partial Results
        </Text>
        {this.state.partialResults.map((result, index) => {
          return (
            <Text
              key={`partial-result-${index}`}
              style={styles.stat}>
              {result}
            </Text>
          )
        })}
        <Text
          style={styles.stat}>
          {`End: ${this.state.end}`}
        </Text>

        <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
          <Image
            source={require('./button.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.button}
        onPress={this._stopRecognizing.bind(this)}>
          <Text style={styles.action}>Stop Recognizing</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button}
        onPress={this._cancelRecognizing.bind(this)}>
          <Text style={styles.action}>
            Cancel
          </Text>
        </TouchableHighlight>

        <TouchableHighlight 
        style={styles.button}
        onPress={this._destroyRecognizer.bind(this)}>
          <Text
            style={styles.action}>
            Destroy
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 200,
    height: 50,
  //  padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});