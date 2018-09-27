import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from '../Tabs';
import Now from './now';
import  Today from './today';
import Forecast from './forecast';

export default class Detail extends React.Component {
  render() {
    return(
      <View style={styles.wrapper}>
        <Tabs>
          <Now label="Now" />
          <Today label="Today" />
          <Forecast label="Forecast" />
        </Tabs>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10
  }
});
