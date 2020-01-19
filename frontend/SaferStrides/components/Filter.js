//import ToggleSwitch from 'toggle-switch-react-native';
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class Filter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="red"
            label="Example label"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="large"
            onToggle={isOn => console.log("changed to : ", isOn)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
