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
        <Text style={styles.mono}>
           {`A ${adjective} ${value}g CO₂/kWh.`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  botWrapper: {

  },
  statusWrapper: {
    flex: 1,
    marginLeft: 15,
  },
  text: {
    marginBottom: 15,
    fontFamily: 'MaisonBook',
    fontSize: 16,
    lineHeight: 22,
    color: '#e4e4e4'
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
