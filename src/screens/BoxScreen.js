import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle}></View>
      </View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 200
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'blue'
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green'
    // alignSelf: 'flex-end'
    // marginTop: 100
    // top: 100
  },
  viewTwoParent: {
    height: 200,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'orange'
  }
});

export default BoxScreen;
