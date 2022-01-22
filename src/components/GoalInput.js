import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal('');
  };
  const cancelGoalHandler = () => {
    props.onCancel();
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.modalVisible} animationType="fade">
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputText}
          placeholder="Course Goals"
          onChangeText={text => goalInputHandler(text)}
          value={enteredGoal}
        />
        <View style={styles.containerButton}>
          <Button title="CANCEL" color={'red'} onPress={cancelGoalHandler} />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  inputText: {width: '80%', borderWidth: 1, marginBottom: 10},
});
