import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>4GL App</Text>
      <Button
        title="Go to SM3 demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to square demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to text demo"
        onPress={() => navigation.navigate('Text')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
