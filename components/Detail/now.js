import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bar from '../Bar';
import formatArray from '../../utils/formatArray';
import { energyColours } from '../../utils/colours';

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

const renderMix = (mix) => {
  const activeGens = mix.filter(gen => gen.perc);
  const redundantGens = mix.filter(gen => !gen.perc).map(gen => LABELS[gen.fuel]);

  return (
    <View style={styles.inner}>
      {activeGens.sort((a, b) => b.perc - a.perc).map((bar, index) =>
        <Bar
          key={`${bar.fuel}-${bar.perc}_${index}`}
          delay={DELAY * index}
          label={LABELS[bar.fuel] || bar.fuel}
          value={bar.perc}
          colour={energyColours[bar.fuel] || 'white'}
        />
      )}
      <Text style={styles.redundant}>
        { redundantGens && `No electricity is currently being generated from ${formatArray(redundantGens, 'or').toLowerCase()}.`}
      </Text>
    </View>
  )
}

export default ({ mix }) => {
  return (
    <ScrollView style={styles.wrapper}>
      { mix && renderMix(mix) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    maxHeight: 300
  },
  inner: {
    padding: 16
  },
  redundant: {
    fontFamily: 'MaisonBook',
    fontSize: 12,
    lineHeight: 16,
    color: '#e4e4e4',
  }
});
