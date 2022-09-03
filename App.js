import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingViewComponent, ScrollView, StyleSheet, Text, View } from 'react-native';
import KeyboardAvoidingViewInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.header}>ToDoApp</Text>
      </View>
      <ScrollView>
      {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
    
    
      <KeyboardAvoidingViewInputField addTask={addTask}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    color: 'blue',
    fontSize: 50,
    fontWeight: '700',
    marginTop: 45,
    // marginBottom: 10,
    marginLeft : 100
  },
  taskContainer: {
    marginTop: 20,
  }
});
