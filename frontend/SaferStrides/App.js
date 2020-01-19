import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import GetLocationButton from './components/GetLocationButton';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width/height ;
const LATITUDE = 43.651070;
const LONGITUDE = -79.347015;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }
  sendUserLocation = () => {
    console.log('Pressed button')
  }

  render() {
    return (
      <View>
      <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            initialRegion={this.state.region}
          >
          </MapView>   
        
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <GetLocationButton onGetLocation={this.sendUserLocation} />
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: height,
  },
});
