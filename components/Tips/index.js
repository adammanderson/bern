import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Kettle, Dryer, Hairdryer, Flying } from '../Icons';

export default class Tips extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>What to avoid</Text>
        <ScrollView
          horizontal={true}
          style={styles.cards}
        >
          <View style={styles.card}>
            <Kettle />
            <Text style={styles.label}>Kettle</Text>
          </View>
          <View style={styles.card}>
            <Dryer />
            <Text style={styles.label}>Dryer</Text>
          </View>
          <View style={styles.card}>
            <Hairdryer />
            <Text style={styles.label}>Hair dryer</Text>
          </View>
          <View style={styles.card}>
            <Flying />
            <Text style={styles.label}>Flying</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  cards: {

  },
  label: {
    fontFamily: 'MaisonBook',
    fontSize: 12,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center'
  },
  card: {
    flexGrow: 0,
    paddingVertical: 5,
    marginRight: 20
  },
  heading: {
    marginBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 15,
    color: 'white'
  }
});
