import React from 'react';
import { StyleSheet, View, Text, FlatList, Alert, Modal, TouchableOpacity } from 'react-native';

export default = (props) =>
  <Modal
    animationType="slide"
    transparent={true}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={{marginTop: 22}}>
      <View>
        <Text>Hello World!</Text>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
