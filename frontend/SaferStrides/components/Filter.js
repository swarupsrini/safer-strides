//import ToggleSwitch from 'toggle-switch-react-native';
import React, {Component} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {switchValue:true};
  }
  //   toggleSwitch = (value) => {
  //     //onValueChange of the switch this function will be called
  //     this.setState({switchValue: value})
  //     //state changes according to switch
  //     //which will result in re-render the text
  //  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headTitle}>Title </Text>
        <View style={styles.bbb}>
        <ToggleSwitch
            isOn={this.state.switchValue}
            onColor="green"
            offColor="red"
            label="Option A"
            labelStyle={{ color: "black", fontWeight: "bold", fontSize: 50 }}
            size="large"
            onToggle={(switchValue) =>{
              this.setState({switchValue});
              console.log(switchValue);
            }}
        />
        </View>
        
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
  headTitle:{
    color: 'gray',
    fontSize: 20,
    fontFamily: '',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bbb:{
    position: "absolute",
        top: 200,
        right: 60,
  }
});
