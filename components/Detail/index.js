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
        <Text style={styles.heading}>Energy mix</Text>
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
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    marginBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 15,
    color: 'white'
  }
});
