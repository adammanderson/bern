import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from '../Tabs';

export default class Detail extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Tabs>
          <View label="Now">
            <Text>Tab Now</Text>
          </View>
          <View label="Today">
            <Text>Tab Today</Text>
          </View>
          <View label="Forecast">
            <Text>Tab Forecast</Text>
          </View>
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
