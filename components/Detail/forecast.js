import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Coming soon.</Text>
      <Text style={styles.notice}>Find the best time to charge your laptop or run the dishwasher over the coming days. Stay tuned.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  heading: {
    marginBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 18,
    color: 'white'
  },
  notice: {
    color: 'white',
    fontFamily: 'MaisonBook',
    lineHeight: 20,
    fontSize: 15
  }
});
