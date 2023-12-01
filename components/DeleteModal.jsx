import { View, Text, Modal, StyleSheet, Button } from 'react-native'

const DeleteModal = ({isVisible, itemSelected, onDeleteItemEvent, setModalVisibleEvent}) => {




  return (
    <Modal animationType="slide" visible={isVisible}>
        <View style={styles.modalMessage}>
          <Text style={styles.modalMessageEliminara}>Se eliminará: </Text>
          <Text style={styles.modalMessageProducto}>{itemSelected.value}</Text>
        </View>
        <View>
          <Button title="Cancelar" color="#ccc" onPress={() => {setModalVisibleEvent(!isVisible)}}/>
          <Button title="Si, eliminar" color="#ef233c" onPress={() => {onDeleteItemEvent()}}/>
        </View>
      </Modal>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
  modalMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessageEliminara: {
    fontSize: 25,
  },
  modalMessageProducto: {
    fontSize: 35,
    textAlign: 'center'
  }
})

