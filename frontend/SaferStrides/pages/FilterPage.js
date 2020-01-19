import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, Alert, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class FilterPage extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <View style={{marginTop: 22}}>
        <View style={styles.optionsButton}>
              <Button title="Back" onPress={() => this.props.nextPage(2)}></Button>
            </View>

        <text>Heat Map Display </text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    optionsButton:{
      width: 100,
      height: 10,
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: 30,
      color: "black",
    }
  }
  );