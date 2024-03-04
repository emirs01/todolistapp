import React, {useState} from "react";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity,
FlatList} from "react-native";
import { appStyles as styles } from "./components/styles"

function App () {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };


  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
    <View stlye={styles.container}>
    <View style={styles.container2}>
    <Text style={styles.title}>
    My Tasks
    </Text>
    <Text style={styles.subtitle}>
    Enter your tasks in the text box below and press the "Add" button to add.
    </Text>
    </View>

      <TextInput 
      onChangeText={setText}
      style={styles.input}
      placeholder="Enter your task here"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTaskPress}>
      <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <View stlye={styles.divider}>
     <FlatList 
     data={tasks}
     renderItem={({ item, index })=> (
       <View style={styles.taskContainer}>
       <Text style={styles.taskText}> { item } </Text>
       <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeleteTaskPress(index)}>
       <Text style={styles.taskDeleteText}> X </Text>
       </TouchableOpacity>
       </View>
     )} 
     keyExtractor={item => item + Date.now() + Math.random()}
     />
      </View>

    </View>
    </SafeAreaView>
  );
}

export default App;