import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 11 },
    { name: 'Friend 2', age: 12 },
    { name: 'Friend 3', age: 13 },
    { name: 'Friend 4', age: 14 },
    { name: 'Friend 5', age: 15 },
    { name: 'Friend 6', age: 16 },
    { name: 'Friend 7', age: 17 },
    { name: 'Friend 8', age: 18 }
  ];
  return (
    <FlatList 
        //horizontal //this props allows you to scroll horizontal instead of up and down
        //showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name }
        data={friends} 
        //element === {item : {name: 'Friend 1' }, index:0 }
        //we use keys because we don't want react to re-render the whole list every time you delete an item off the list
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }} 
    />
  ); 
};

const styles = StyleSheet.create({
  textStyle: {
    //marginVertical adds space to element (top and bottom)
    marginVertical: 50
  }
});

export default ListScreen;
