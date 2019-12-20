import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Box Screen 1</Text>
        <Text style={styles.textTwoStyle}>Box Screen 2</Text>
        <Text style={styles.textThreeStyle}>Box Screen 3</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'flex-start',
    height: 200
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red'
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red'
  }
});

export default BoxScreen;