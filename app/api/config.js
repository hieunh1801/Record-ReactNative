'use strict';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

export default class Convert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
        }
    }
   
    render() {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: 'black',
                    borderRadius: 10,
                    width: 120,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                
                }}>
                <Text style={{ color: 'white' }}>TouchMe</Text>
            </TouchableOpacity>
        );
    }
}