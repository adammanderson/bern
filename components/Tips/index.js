import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tips extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>Avoid using the washing machine or dishwasher for the time being.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16
  },
  text: {
    fontFamily: 'MaisonBook',
    fontSize: 15,
    lineHeight: 20,
    color: '#2a2a2a'
  },
  card: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 4,
  }
});
