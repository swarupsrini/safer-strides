import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, Alert, StyleSheet} from 'react-native';
import Filter from '../components/Filter';
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
            <Filter />
            <Filter />
            <Filter />
            <Filter />

            <View style={styles.middy}>        
                <Text style={styles.headTitle}> Heat Map Display </Text>
            </View>
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
    },
    headTitle:{
        color: 'black',
        fontSize: 40,
        fontFamily: '',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    middy:{
        position: "absolute",
        top: 100,
        right: 50,
    }
  }
  );