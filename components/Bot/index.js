import React from 'react'
import { StyleSheet, View } from 'react-native';
import Angry from './angry'

const Bot = () =>
  <View style={styles.botWrapper}>
    <Angry />
  </View>

const styles = StyleSheet.create({
  botWrapper: {
    width: 80,
    height: 80,
    backgroundColor: '#FF2D37',
    borderRadius: 30
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

export default Bot
