import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listOutput}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listOutput: {
    backgroundColor: '#eee',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
