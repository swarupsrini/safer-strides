import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

function GoogleSearchBar() {
  return (
    <GoogleAutoComplete apiKey="AIzaSyBlq2FgyIvsIONEKMA7P_i1gUHcQ-335ik" debounce={300}>
      {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
        <React.Fragment>
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderWidth: 1,
              paddingHorizontal: 16,
            }}
            value={inputValue}
            onChangeText={handleTextChange}
            placeholder="Location..."
          />
          <ScrollView style={{ maxHeight: 100 }}>
            {locationResults.map((el, i) => (
              <LocationItem
                {...el}
                fetchDetails={fetchDetails}
                key={String(i)}
              />
            ))}
          </ScrollView>
        </React.Fragment>
      )}
    </GoogleAutoComplete>
  );
}