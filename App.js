import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Modal ,View, Button, TextInput, Alert, FlatList, SafeAreaView, TouchableOpacity, Touchable
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {styles} from "./App.style";

const DATA = [
  {
    id: '1',
    title: 'Meditation',
    completed: false,
  },
  {
    id: '2',
    title: 'Coding',
    completed: false,
  },
  {
    id: '3',
    title: 'Journaling',
    completed: false,
  }

]

export default function App() {
  const [items, setItems] = useState(DATA);
  const [text,setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);


  const addNewTodo = () => {
    let newTodo ={
      id: items.lenght + 1,
      title: text,
      completed: false
    }

     setItems([...items,newTodo]);
     setText("");
     setIsModalVisible(false);
  }

  const markItemCompleted = (item) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id);
  
      if (itemIndex !== -1){
        const updateItems =[...items];
        updateItems[itemIndex] = {...items[itemIndex], completed:true };
        setItems(updateItems);
      }
  }

  const TodoItem = (props) => (
    <TouchableOpacity style={styles.item} onPress={() => markItemCompleted(props.item)} >
      <Text style={props.item.completed ? styles.itemTextCompleted :  styles.itemText} >{props.item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.icon}>
        <Ionicons name="add" size={24} color="#652E00"/>
        </View>
        </TouchableOpacity>
      <Modal visible ={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>  
        <View style={styles.centeredView}>
          <View style = {styles.modalView}>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
          <Button title='Add Todo' onPress={addNewTodo}  />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" /> 
      <FlatList
      style={styles.list}
      data={items}
      renderItem={({item}) => <TodoItem item={item} />}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
