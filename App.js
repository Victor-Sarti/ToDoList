import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Modal ,View, Button, TextInput, Alert, FlatList, SafeAreaView, TouchableOpacity, Touchable
} from 'react-native';

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
      <Button title='add an item' onPress={() => setIsModalVisible(true)}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },

  input:{
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    
  },
  list: {
    alignSelf: 'stretch'
  },
  item:{
    backgroundColor: '#6db6dd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    
  },
  itemText: {
    color:'#ffff',
  },
  itemTextCompleted:{
    color: '#ffff',
    textDecorationLine: 'line-through'
  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    display: 'flex',
    gap: 10,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
