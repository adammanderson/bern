import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bar from '../Bar';

const BARS = [
  {
    label: 'Gas',
    value: '43.5'
  },
  {
    label: 'Coal',
    value: '50.9'
  },
  {
    label: 'Wind',
    value: 5
  },
  {
    label: 'Solar',
    value: '0'
  },
  {
    label: 'Biomass',
    value: '43.5'
  },
  {
    label: 'Hydro',
    value: '4'
  }
];
const DELAY = 100;

export default () => {
  return(
    <ScrollView>
      <View style={styles.wrapper}>
        { BARS.map((bar, index) =>
          <Bar
            key={index}
            delay={DELAY * index}
            label={bar.label}
            value={bar.value}
          />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16
  }
});
