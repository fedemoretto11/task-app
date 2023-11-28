import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevList => [...prevList, {id: Math.random().toString(), value: textItem} 
    ])  
    setTextItem('')
  }

  const renderItemList = ({item}) => (
    <View>
      <Text>{item.value}</Text>
    </View>
  )

  return (
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
  }
});
