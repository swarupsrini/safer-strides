import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, StatusBar, Button } from 'react-native';
import axios from 'axios';

import FilterPage from './FilterPage';
import SearchBar from 'react-native-searchbar';

import MapView, { Circle } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width/height ;
const LATITUDE = 43.651070;
const LONGITUDE = -79.347015;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const circle = {
  center: {
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
  radius: 700,
};
const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];

export default class MapStreetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        };
    }

    render() {
        return (<View>
            <MapView
                provider={this.props.provider}
                style={styles.map}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
                initialRegion={this.state.region}
                >
            <Circle
              center={{latitude: 43.6706216, longitude: -79.3865296}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7756926, longitude: -79.2210486}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7474687, longitude: -79.4826496}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4848578, longitude: -80.5503174}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7668246, longitude: -79.4259037}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.461165, longitude: -80.538334}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7290853, longitude: -79.4489454}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7774174, longitude: -79.4746882}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6718051, longitude: -79.3846172}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4977771, longitude: -80.5077565}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6464714, longitude: -79.4037161}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6572984, longitude: -79.3843645}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.266216, longitude: -79.9985841}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.696131, longitude: -79.3697946}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7261027, longitude: -79.3134581}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4746742, longitude: -80.5908538}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6723558, longitude: -79.3768515}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.783594, longitude: -79.2993322}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.9077536, longitude: -80.0932257}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4467221, longitude: -80.4873602}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6618723, longitude: -79.3793473}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.659884, longitude: -79.390349}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6798316, longitude: -79.3221352}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.707705, longitude: -79.3311829}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7411347, longitude: -79.3322581}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7414958, longitude: -79.3200497}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6820237, longitude: -79.3297679}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.2945449, longitude: -79.8649755}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6864325, longitude: -79.3003283}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6869517, longitude: -79.3073413}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7447846, longitude: -79.2447319}}
              radius={100}
              fillColor='ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4984806, longitude: -80.5243505}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6746978, longitude: -79.3965732}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.692745, longitude: -79.565842}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.686461, longitude: -79.602192}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6916848, longitude: -79.5708353}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.799454, longitude: -79.354036}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.736626, longitude: -79.343445}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6947588, longitude: -79.3431193}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.837853, longitude: -79.4819486}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.837853, longitude: -79.4819486}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.657703, longitude: -79.515877}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6572918, longitude: -79.3734506}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6581648, longitude: -79.3724019}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.1881745, longitude: -80.3836227}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6588971, longitude: -79.3365895}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.725772, longitude: -79.3164526}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.763438, longitude: -79.2913587}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6393584, longitude: -79.5647963}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6398899, longitude: -79.4110984}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.1535809, longitude: -80.724761}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6584927, longitude: -79.3848544}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7682775, longitude: -79.5229504}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.662264, longitude: -79.405996}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6396236, longitude: -79.3795849}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6598064, longitude: -79.4926851}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6816794, longitude: -79.4261989}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7266633, longitude: -79.5606019}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7266633, longitude: -79.5606019}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7266633, longitude: -79.5606019}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.5219748, longitude: -80.6549742}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6772126, longitude: -79.4961735}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6597077, longitude: -79.3755739}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.863707, longitude: -79.514399}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.863707, longitude: -79.514399}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6654098, longitude: -79.4645433}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4401443, longitude: -80.4809436}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.636631, longitude: -79.4415691}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6491589, longitude: -79.3778922}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.2237667, longitude: -79.6354045}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.2237667, longitude: -79.6354045}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7218801, longitude: -79.2363259}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6382232, longitude: -79.4488251}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.5954363, longitude: -79.5055993}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.761924, longitude: -79.215844}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7632961, longitude: -79.2088147}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7552911, longitude: -79.2467449}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6808178, longitude: -79.4826183}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6465867, longitude: -79.3702547}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.8207722, longitude: -79.2463189}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.8207722, longitude: -79.2463189}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.781712, longitude: -79.2339202}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.5190882, longitude: -80.5422381}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 44.0110599, longitude: -79.3155967}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.8098614, longitude: -79.2576443}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.8037432, longitude: -79.2862894}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.8259409, longitude: -79.2972829}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7879933, longitude: -79.2083382}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7928371, longitude: -79.195935}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7928371, longitude: -79.195935}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.707705, longitude: -79.3311829}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.707705, longitude: -79.3311829}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7687665, longitude: -79.4130269}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6985901, longitude: -79.3255231}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6947588, longitude: -79.3431193}}
              radius={100}
              fillColor='#ff0000'
              strokeColor='#ff0000'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6949906, longitude: -79.4418156}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6779934, longitude: -79.4352319}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6926349, longitude: -79.4408167}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6302408, longitude: -79.7220799}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6457231, longitude: -79.4005884}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7734744, longitude: -79.3896342}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7789414, longitude: -79.2568878}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4454513, longitude: -80.4936515}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6594099, longitude: -79.3474226}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4454513, longitude: -80.4936515}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6818528, longitude: -79.4676965}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7225941, longitude: -79.4142334}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6511421, longitude: -79.4762591}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.707705, longitude: -79.3311829}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6968635, longitude: -79.8297731}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6968635, longitude: -79.8297731}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7738071, longitude: -79.3532775}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7554798, longitude: -79.4385257}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7378239, longitude: -79.52013}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7852895, longitude: -79.2786386}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7946606, longitude: -79.2349784}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.73727, longitude: -79.522348}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7853173, longitude: -79.2785015}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7474687, longitude: -79.4826496}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6527581, longitude: -79.398087}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6807093, longitude: -79.4307402}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7141302, longitude: -79.2711119}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.716648, longitude: -79.260262}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.9120105, longitude: -79.4467502}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6786021, longitude: -79.4397575}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.577719, longitude: -79.831102}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6736208, longitude: -79.4708219}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7225227, longitude: -79.3739578}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7408283, longitude: -79.344323}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6419537, longitude: -79.5578659}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6263384, longitude: -79.502609}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.631195, longitude: -79.478508}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7608211, longitude: -79.4855435}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.6694459, longitude: -79.4691475}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.695226, longitude: -79.487647}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7519174, longitude: -79.5163825}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7201217, longitude: -79.4409978}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7368051, longitude: -79.307634}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4383414, longitude: -80.5240657}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4383414, longitude: -80.5240657}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4383414, longitude: -80.5240657}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7727093, longitude: -79.3207105}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7273999, longitude: -79.4877113}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.9849471, longitude: -79.3613888}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4802379, longitude: -80.5030992}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4802379, longitude: -80.5030992}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4783164, longitude: -80.5115226}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7428815, longitude: -79.4859941}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.4532192, longitude: -80.4905658}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.664929, longitude: -79.3845625}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.7440969, longitude: -79.4066275}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: 43.456021, longitude: -80.5171116}}
              radius={100}
              fillColor='#ffff00'
              strokeColor='#ffff00'
              zIndex={2}
              strokeWidth={2}
              />
            </MapView>
            <SearchBar
                ref={(ref) => this.searchBar = ref}
                data={items}
                handleResults={this._handleResults}
                showOnLoad
                />
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

        optionsButton:{
          width: 100,
          height: 10,
          position: 'absolute',
          bottom: 0,
          right: 0,
          top: 65,
        }
      }
      );