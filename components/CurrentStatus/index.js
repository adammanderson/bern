import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bot from '../Bot'

const CurrentStatus = ({index = 'unkown', value, adjective}) => {
  return (
    <View style={styles.container}>
      <View style={styles.botWrapper}>
        <Bot/>
      </View>
      <View style={styles.statusWrapper}>
        <Text style={styles.text}>
          Electricity consumption in your area is creating
          <Text style={styles.bold}>
             {` ${index} `}
          </Text>
          CO₂ emissions.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 0,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FF2D37',
    borderRadius: 4
  },
  botWrapper: {

  },
  statusWrapper: {
  },
  text: {
    fontFamily: 'MaisonBook',
    fontSize: 16,
    lineHeight: 22,
    color: '#e4e4e4',
    textAlign: 'center'
  },
  bold: {
    fontFamily: 'MaisonBold',
    color: 'white'
  },
  mono: {
    fontFamily: 'MaisonMono',
    fontSize: 17,
    lineHeight: 21,
    color: 'white'
  }
});

export default CurrentStatus
