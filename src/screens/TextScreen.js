import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.text}>
          Enter Password:
      </Text>
      <TextInput
        value={password}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 5 ? <Text>Must be more than 5 letters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 40
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
