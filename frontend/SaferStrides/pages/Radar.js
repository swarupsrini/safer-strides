import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Radar from 'react-native-radar';

export default class MyComponent extends Component {

  componentDidMount() {
    // identify the user and request permissions
    Radar.setUserId(this.state.userId);
    Radar.requestPermissions(true);

    // track the user's location once in the foreground
    Radar.trackOnce().then((result) => {
      // do something with result.events, result.user.geofences
    }).catch((err) => {
      // optionally, do something with err
    });

    // start tracking the user's location in the background
    Radar.startTracking();
  }

}

// receive events
Radar.on('events', (result) => {
  // do something with result.events, result.user
});

// receive location updates
Radar.on('location', (result) => {
  // do something with result.location, result.user
});

// receive errors
Radar.on('error', (err) => {
  // do something with err
});