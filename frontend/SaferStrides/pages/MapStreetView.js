import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, StatusBar, Button } from 'react-native';
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
              <Circle
              center={circle.center}
              radius={circle.radius}
              fillColor="rgba(255,0,0,0.5)"
              strokeColor="rgba(0,0,0,0.5)"
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
            
            <View style={styles.optionsButton}>
              <Button title="Options" onPress={() => this.props.nextPage(4)}></Button>
            </View>

            {/* <FilterPage > </FilterPage> */}
            {/* <Filter /> */}
            
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