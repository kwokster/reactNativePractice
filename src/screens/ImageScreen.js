import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        score="8/10"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        score="9/10"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/images/mountain.jpg')}
        score="10/10"
      />
    </View>
  );
};

// const styles = StyleSheet.create();

export default ImageScreen;
