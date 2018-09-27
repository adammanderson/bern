import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeGrid from '../TimeGrid';

export default () => {
  return(
    <View style={styles.wrapper}>
      <TimeGrid />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 16
  }
});
