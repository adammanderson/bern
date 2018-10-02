import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CurrentStatus = ({index = 'unkown', value, adjective}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Right now, electricity consumption in your area is creating
        <Text style={styles.bold}>
           {` ${index} `}
        </Text>
        CO₂ emissions.
      </Text>
      <Text style={styles.mono}>
         {`A ${adjective} ${value}g CO₂/kWh.`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  text: {
    marginBottom: 15,
    fontFamily: 'MaisonBook',
    fontSize: 18,
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
