import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this._width = new Animated.Value(0);
  }

  componentDidMount() {
    const { value, delay } = this.props;
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._width, {
        toValue: value,
      }),
    ]).start();
  }

  componentWillUnmount() {
    this._width.stopAnimation();
  }

  render() {
    const { label, value } = this.props;
    const formattedValue = value ? `${value}%` : 0;
    const interpolatedWidth = this._width.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>
            {formattedValue}
          </Text>
        </View>
        <View style={styles.bar}>
          <Animated.View style={[styles.barValue, { width: interpolatedWidth}]}/>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10
  },
  textWrapper: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    flexGrow: 1,
    lineHeight: 17,
    fontSize: 15,
    fontFamily: 'MaisonMono',
    color: 'white'
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'MaisonBook'
  },
  bar: {
    height: 3,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1
  },
  barValue: {
    width: 200,
    height: 3,
    backgroundColor: 'white'
  }
});
