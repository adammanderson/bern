import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bar from '../Bar';

const LABELS = {
  'gas'    : 'Gas',
  'coal'   : 'Coal',
  'wind'   : 'Wind',
  'solar'  : 'Solar',
  'biomass': 'Biomass',
  'hydro'  : 'Hydro',
  'nuclear': 'Nuclear',
  'other'  : 'Other sources',
  'imports': 'Imports'
};

const DELAY = 100;

export default ({ mix }) => {
  return(
    <ScrollView style={styles.wrapper}>
      <View style={styles.inner}>
        { mix && mix.sort((a, b) => b.perc - a.perc).map((bar, index) =>
          <Bar
            key={index}
            delay={DELAY * index}
            label={LABELS[bar.fuel] || bar.fuel}
            value={bar.perc}
          />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: 300
  },
  inner: {
    padding: 16
  }
});
