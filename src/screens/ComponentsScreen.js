import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>Wow!</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
});

export default ComponentsScreen;
