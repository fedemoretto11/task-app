import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import DeleteModal from './components/DeleteModal';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevList => [...prevList, {id: Math.random().toString(), value: textItem} 
    ])  
    setTextItem('')
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelectedToDelete(itemList.find(item => item.id == id))
  }

  const deleteItem = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setModalVisible(!modalVisible);
  }


  const renderItemList = ({item}) => (
    <View style={styles.taskItem}>
      <Text>{item.value}</Text>
      <Button 
        title='X'
        onPress={() => {onSelectItemHandler(item.id)}}
        color='#9F4242'
      ></Button>
    </View>
  )

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Ingresar tarea' 
            style={styles.textInput}
            onChangeText={onChangeTextHandler}
            value={textItem}
          />
          <Button 
            title='Add' 
            color='#2E1AD1'
            onPress={addItemToList}
          />
        </View>
        <View>
          <FlatList 
            data={itemList}
            renderItem={renderItemList}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <DeleteModal 
        isVisible={modalVisible}
        itemSelected={itemSelectedToDelete}
        onDeleteItemEvent={deleteItem}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textInput: {
    width: 250,
    borderBottomColor: '#f02354',
    borderBottomWidth: 1,
  },
  taskItem : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10, 
    marginVertical: 10,
    backgroundColor: "#DFB7B7",
    borderRadius: 10,
  }
});
