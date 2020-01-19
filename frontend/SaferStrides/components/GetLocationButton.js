import React from 'react';
import { Button } from 'react-native';

const GetLocation = props => {
    return (
        <Button title = "Send Location" onPress={props.onGetLocation}/>
    );
}