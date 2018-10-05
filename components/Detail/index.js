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
          <Now label="Now" mix={this.props.mix}/>
          {/* <Today label="Today" /> */}
          <Forecast label="Forecast" />
        </Tabs>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 16,
    marginTop: 0,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.4)'
  }
});
