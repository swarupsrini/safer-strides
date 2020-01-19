import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, StatusBar, Button } from 'react-native';
import axios from 'axios';

import FilterPage from './FilterPage';

import MapView, {
  Circle
} from 'react-native-maps';

import Filter from '../components/Filter';
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

    // createMap = () => {
    //     const data = [{"lat":43.6706216,"lng":-79.3865296,"color":"#ffff00"},{"lat":43.7756926,"lng":-79.2210486,"color":"#ffff00"},{"lat":43.7474687,"lng":-79.4826496,"color":"#ffff00"},{"lat":43.4848578,"lng":-80.5503174,"color":"#ffff00"},{"lat":43.7668246,"lng":-79.4259037,"color":"#ffff00"},{"lat":43.461165,"lng":-80.538334,"color":"#ffff00"},{"lat":43.7290853,"lng":-79.4489454,"color":"#ffff00"},{"lat":43.7774174,"lng":-79.4746882,"color":"#ffff00"},{"lat":43.6718051,"lng":-79.3846172,"color":"#ffff00"},{"lat":43.4977771,"lng":-80.5077565,"color":"#ffff00"},{"lat":43.6464714,"lng":-79.4037161,"color":"#ffff00"},{"lat":43.6572984,"lng":-79.3843645,"color":"#ffff00"},{"lat":43.266216,"lng":-79.9985841,"color":"#ffff00"},{"lat":43.696131,"lng":-79.3697946,"color":"#ffff00"},{"lat":43.7261027,"lng":-79.3134581,"color":"#ffff00"},{"lat":43.4746742,"lng":-80.5908538,"color":"#ffff00"},{"lat":43.6723558,"lng":-79.3768515,"color":"#ffff00"},{"lat":43.783594,"lng":-79.2993322,"color":"#ffff00"},{"lat":43.9077536,"lng":-80.0932257,"color":"#ffff00"},{"lat":43.4467221,"lng":-80.4873602,"color":"#ffff00"},{"lat":43.6618723,"lng":-79.3793473,"color":"#ffff00"},{"lat":43.659884,"lng":-79.390349,"color":"#ffff00"},{"lat":43.6798316,"lng":-79.3221352,"color":"#ffff00"},{"lat":43.707705,"lng":-79.3311829,"color":"#ff0000"},{"lat":43.7411347,"lng":-79.3322581,"color":"#ffff00"},{"lat":43.7414958,"lng":-79.3200497,"color":"#ffff00"},{"lat":43.6820237,"lng":-79.3297679,"color":"#ffff00"},{"lat":43.2945449,"lng":-79.8649755,"color":"#ffff00"},{"lat":43.6864325,"lng":-79.3003283,"color":"#ffff00"},{"lat":43.6869517,"lng":-79.3073413,"color":"#ffff00"},{"lat":43.7447846,"lng":-79.2447319,"color":"#ffff00"},{"lat":43.4984806,"lng":-80.5243505,"color":"#ffff00"},{"lat":43.6746978,"lng":-79.3965732,"color":"#ffff00"},{"lat":43.692745,"lng":-79.565842,"color":"#ffff00"},{"lat":43.686461,"lng":-79.602192,"color":"#ffff00"},{"lat":43.6916848,"lng":-79.5708353,"color":"#ffff00"},{"lat":43.799454,"lng":-79.354036,"color":"#ffff00"},{"lat":43.736626,"lng":-79.343445,"color":"#ffff00"},{"lat":43.6947588,"lng":-79.3431193,"color":"#ffff00"},{"lat":43.837853,"lng":-79.4819486,"color":"#ffff00"},{"lat":43.837853,"lng":-79.4819486,"color":"#ffff00"},{"lat":43.657703,"lng":-79.515877,"color":"#ffff00"},{"lat":43.6572918,"lng":-79.3734506,"color":"#ffff00"},{"lat":43.6581648,"lng":-79.3724019,"color":"#ffff00"},{"lat":43.1881745,"lng":-80.3836227,"color":"#ffff00"},{"lat":43.6588971,"lng":-79.3365895,"color":"#ffff00"},{"lat":43.725772,"lng":-79.3164526,"color":"#ffff00"},{"lat":43.763438,"lng":-79.2913587,"color":"#ffff00"},{"lat":43.6393584,"lng":-79.5647963,"color":"#ffff00"},{"lat":43.6398899,"lng":-79.4110984,"color":"#ffff00"},{"lat":43.1535809,"lng":-80.724761,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.6584927,"lng":-79.3848544,"color":"#ffff00"},{"lat":43.7682775,"lng":-79.5229504,"color":"#ffff00"},{"lat":43.662264,"lng":-79.405996,"color":"#ffff00"},{"lat":43.6396236,"lng":-79.3795849,"color":"#ffff00"},{"lat":43.6598064,"lng":-79.4926851,"color":"#ffff00"},{"lat":43.6816794,"lng":-79.4261989,"color":"#ffff00"},{"lat":43.7266633,"lng":-79.5606019,"color":"#ffff00"},{"lat":43.7266633,"lng":-79.5606019,"color":"#ffff00"},{"lat":43.7266633,"lng":-79.5606019,"color":"#ffff00"},{"lat":43.5219748,"lng":-80.6549742,"color":"#ffff00"},{"lat":43.6772126,"lng":-79.4961735,"color":"#ffff00"},{"lat":43.6597077,"lng":-79.3755739,"color":"#ffff00"},{"lat":43.863707,"lng":-79.514399,"color":"#ffff00"},{"lat":43.863707,"lng":-79.514399,"color":"#ffff00"},{"lat":43.6654098,"lng":-79.4645433,"color":"#ffff00"},{"lat":43.4401443,"lng":-80.4809436,"color":"#ffff00"},{"lat":43.636631,"lng":-79.4415691,"color":"#ffff00"},{"lat":43.6491589,"lng":-79.3778922,"color":"#ffff00"},{"lat":43.2237667,"lng":-79.6354045,"color":"#ffff00"},{"lat":43.2237667,"lng":-79.6354045,"color":"#ffff00"},{"lat":43.7218801,"lng":-79.2363259,"color":"#ffff00"},{"lat":43.6382232,"lng":-79.4488251,"color":"#ffff00"},{"lat":43.5954363,"lng":-79.5055993,"color":"#ffff00"},{"lat":43.761924,"lng":-79.215844,"color":"#ffff00"},{"lat":43.7632961,"lng":-79.2088147,"color":"#ffff00"},{"lat":43.7552911,"lng":-79.2467449,"color":"#ffff00"},{"lat":43.6808178,"lng":-79.4826183,"color":"#ffff00"},{"lat":43.6465867,"lng":-79.3702547,"color":"#ffff00"},{"lat":43.8207722,"lng":-79.2463189,"color":"#ffff00"},{"lat":43.8207722,"lng":-79.2463189,"color":"#ffff00"},{"lat":43.781712,"lng":-79.2339202,"color":"#ffff00"},{"lat":43.5190882,"lng":-80.5422381,"color":"#ffff00"},{"lat":44.0110599,"lng":-79.3155967,"color":"#ffff00"},{"lat":43.8098614,"lng":-79.2576443,"color":"#ffff00"},{"lat":43.8037432,"lng":-79.2862894,"color":"#ffff00"},{"lat":43.8259409,"lng":-79.2972829,"color":"#ffff00"},{"lat":43.7879933,"lng":-79.2083382,"color":"#ffff00"},{"lat":43.7928371,"lng":-79.195935,"color":"#ff0000"},{"lat":43.7928371,"lng":-79.195935,"color":"#ffff00"},{"lat":43.707705,"lng":-79.3311829,"color":"#ffff00"},{"lat":43.707705,"lng":-79.3311829,"color":"#ffff00"},{"lat":43.7687665,"lng":-79.4130269,"color":"#ffff00"},{"lat":43.6985901,"lng":-79.3255231,"color":"#ffff00"},{"lat":43.6947588,"lng":-79.3431193,"color":"#ffff00"},{"lat":43.6949906,"lng":-79.4418156,"color":"#ffff00"},{"lat":43.6779934,"lng":-79.4352319,"color":"#ffff00"},{"lat":43.6926349,"lng":-79.4408167,"color":"#ffff00"},{"lat":43.6302408,"lng":-79.7220799,"color":"#ffff00"},{"lat":43.6457231,"lng":-79.4005884,"color":"#ffff00"},{"lat":43.7734744,"lng":-79.3896342,"color":"#ffff00"},{"lat":43.7789414,"lng":-79.2568878,"color":"#ffff00"},{"lat":43.4454513,"lng":-80.4936515,"color":"#ffff00"},{"lat":43.6594099,"lng":-79.3474226,"color":"#ffff00"},{"lat":43.4454513,"lng":-80.4936515,"color":"#ffff00"},{"lat":43.6818528,"lng":-79.4676965,"color":"#ffff00"},{"lat":43.7225941,"lng":-79.4142334,"color":"#ffff00"},{"lat":43.6511421,"lng":-79.4762591,"color":"#ffff00"},{"lat":43.707705,"lng":-79.3311829,"color":"#ffff00"},{"lat":43.6968635,"lng":-79.8297731,"color":"#ffff00"},{"lat":43.6968635,"lng":-79.8297731,"color":"#ffff00"},{"lat":43.7738071,"lng":-79.3532775,"color":"#ffff00"},{"lat":43.7554798,"lng":-79.4385257,"color":"#ffff00"},{"lat":43.7378239,"lng":-79.52013,"color":"#ffff00"},{"lat":43.7852895,"lng":-79.2786386,"color":"#ffff00"},{"lat":43.7946606,"lng":-79.2349784,"color":"#ffff00"},{"lat":43.73727,"lng":-79.522348,"color":"#ffff00"},{"lat":43.7853173,"lng":-79.2785015,"color":"#ffff00"},{"lat":43.7474687,"lng":-79.4826496,"color":"#ffff00"},{"lat":43.6527581,"lng":-79.398087,"color":"#ffff00"},{"lat":43.6807093,"lng":-79.4307402,"color":"#ffff00"},{"lat":43.7141302,"lng":-79.2711119,"color":"#ffff00"},{"lat":43.716648,"lng":-79.260262,"color":"#ffff00"},{"lat":43.9120105,"lng":-79.4467502,"color":"#ffff00"},{"lat":43.6786021,"lng":-79.4397575,"color":"#ffff00"},{"lat":43.577719,"lng":-79.831102,"color":"#ffff00"},{"lat":43.6736208,"lng":-79.4708219,"color":"#ffff00"},{"lat":43.7225227,"lng":-79.3739578,"color":"#ffff00"},{"lat":43.7408283,"lng":-79.344323,"color":"#ffff00"},{"lat":43.6419537,"lng":-79.5578659,"color":"#ffff00"},{"lat":43.6263384,"lng":-79.502609,"color":"#ffff00"},{"lat":43.631195,"lng":-79.478508,"color":"#ffff00"},{"lat":43.7608211,"lng":-79.4855435,"color":"#ffff00"},{"lat":43.6694459,"lng":-79.4691475,"color":"#ffff00"},{"lat":43.695226,"lng":-79.487647,"color":"#ffff00"},{"lat":43.7519174,"lng":-79.5163825,"color":"#ffff00"},{"lat":43.7201217,"lng":-79.4409978,"color":"#ffff00"},{"lat":43.7368051,"lng":-79.307634,"color":"#ffff00"},{"lat":43.4383414,"lng":-80.5240657,"color":"#ffff00"},{"lat":43.4383414,"lng":-80.5240657,"color":"#ffff00"},{"lat":43.4383414,"lng":-80.5240657,"color":"#ffff00"},{"lat":43.7727093,"lng":-79.3207105,"color":"#ffff00"},{"lat":43.7273999,"lng":-79.4877113,"color":"#ffff00"},{"lat":43.9849471,"lng":-79.3613888,"color":"#ffff00"},{"lat":43.4802379,"lng":-80.5030992,"color":"#ffff00"},{"lat":43.4802379,"lng":-80.5030992,"color":"#ffff00"},{"lat":43.4783164,"lng":-80.5115226,"color":"#ffff00"},{"lat":43.7428815,"lng":-79.4859941,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.4532192,"lng":-80.4905658,"color":"#ffff00"},{"lat":43.664929,"lng":-79.3845625,"color":"#ffff00"},{"lat":43.7440969,"lng":-79.4066275,"color":"#ffff00"},{"lat":43.456021,"lng":-80.5171116,"color":"#ffff00"}]
        
    //     map = <View>
    //         <MapView
    //             provider={this.props.provider}
    //             style={styles.map}
    //             scrollEnabled={true}
    //             zoomEnabled={true}
    //             pitchEnabled={true}
    //             rotateEnabled={true}
    //             initialRegion={this.state.region}
    //             >
    //           <Circle
    //           center={circle.center}
    //           radius={circle.radius}
    //           fillColor="rgba(255,0,0,0.5)"
    //           strokeColor="rgba(0,0,0,0.5)"
    //           zIndex={2}
    //           strokeWidth={2}
    //           />
    //         </MapView>
            
    //         <View style={styles.optionsButton}>
    //           <Button title="Options" onPress={() => this.props.nextPage(4)}></Button>
    //         </View>

    //         {/* <FilterPage > </FilterPage> */}
    //         {/* <Filter /> */}
            
    //         {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
    //         {/* <GetLocationButton onGetLocation={this.sendUserLocation} /> */}
    //         {/* <Text style={styles.instructions}>{instructions}</Text> */}
    //       </View>

    //     //   data.forEach(d => {

    //     //   });

    //       return map

    // }

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
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ff0000"
              strokeColor="#ff0000"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ff0000"
              strokeColor="#ff0000"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              /><Circle
              center={{latitude: d.lat, longitude: d.lng}}
              radius={50}
              fillColor="#ffff00"
              strokeColor="#ffff00"
              zIndex={2}
              strokeWidth={2}
              />
            </MapView>
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
          top: 30,
        }
      }
      );