import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Time from './time';

const times = [
  {
    time: '0000',
    index: 'H',
    forecast: '448'
  },
  {
    time: '0100',
    index: 'H',
    forecast: '430'
  },
  {
    time: '0200',
    index: 'VH',
    forecast: '587'
  },
  {
    time: '0300',
    index: 'VH',
    forecast: '590'
  },
  {
    time: '0400',
    index: 'VH',
    forecast: '540'
  },
  {
    time: '0500',
    index: 'M',
    forecast: '342'
  },
  {
    time: '0600',
    index: 'M',
    forecast: '330'
  },
  {
    time: '0700',
    index: 'L',
    forecast: '300'
  },
  {
    time: '0800',
    index: 'L',
    forecast: '500'
  }
];
const DELAY = 300;

export default (props) => {
  return(
    <ScrollView
      horizontal={true}
    >
      {times.map((item, index) =>
        <Time
          key={index}
          delay={DELAY * index}
          time={item.time}
          forecast={item.forecast}
          forecastIndex={item.index}
        />
      )}
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16
  }
});
