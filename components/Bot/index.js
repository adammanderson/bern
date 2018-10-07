import React from 'react'
import { StyleSheet, View } from 'react-native';
import Angry from './angry';
import Happy from './happy';
import Upset from './upset';
import Love from './love';
import Awkward from './awkward';

const FACES = {
  'unknown':   <Love />,
  'very low':  <Happy />,
  'low':       <Happy />,
  'moderate':  <Awkward />,
  'high':      <Angry />,
  'very high': <Upset />
}
const Bot = (props) => {
  return (
    <View style={styles.botWrapper}>
      {FACES[props.index]}
    </View>
  )
}

const styles = StyleSheet.create({
  botWrapper: {
    width: 100,
    height: 100,
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
