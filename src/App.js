import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
    setIsAddModal(false);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsAddModal(true)} title="Add New Goal" />
      <GoalInput
        onAdd={addGoalHandler}
        modalVisible={isAddModal}
        onCancel={cancelGoalHandler}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              onDelete={deleteGoalHandler}
              id={itemData.item.id}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {padding: 50},
});
