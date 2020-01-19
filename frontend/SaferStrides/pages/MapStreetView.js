import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
// import GetLocationButton from './pages/GetLocationButton';

import LocationView from '../components/LocationView'
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width/height ;
const LATITUDE = 43.651070;
const LONGITUDE = -79.347015;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapStreetView extends Component {
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
    render() {
        return (
            <View>
            {/* <MapView
                provider={this.props.provider}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                initialRegion={this.state.region}
                >
            </MapView>    */}

            <LocationView />
            
            {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
            {/* <GetLocationButton onGetLocation={this.sendUserLocation} /> */}
            {/* <Text style={styles.instructions}>{instructions}</Text> */}
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        map: {
            width: width,
            height: height,
            top: StatusBar.currentHeight,
        },
      });