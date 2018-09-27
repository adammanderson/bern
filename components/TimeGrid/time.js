import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const forecastMappings = {
  'L': '0',
  'M': '0.3',
  'H': '0.7',
  'VH': '0.9'
};

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this._bottom = new Animated.Value(0);
  }

  componentDidMount() {
    const { delay, forecastIndex } = this.props;
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._bottom, {
        toValue: forecastMappings[forecastIndex],
      }),
    ]).start();
  }

  render() {
    const { time, forecastIndex, forecast } = this.props;
    const interpolatedBottom = this._bottom.interpolate({inputRange: [0, 1], outputRange: [1, 0.1]});
    console.log(this._bottom)
    return(
      <View style={styles.wrapper}>
        <Text style={styles.time}>{time}</Text>
        <Animated.View style={[styles.forecastWrapper, { flex: interpolatedBottom }]}>
          <View style={styles.forecastInner}>
            <Text style={styles.index}>{forecastIndex}</Text>
            <Text style={styles.forecast}>{`${forecast}g`}</Text>
          </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 12,
    borderRightWidth: 0,
    borderRightColor: 'rgba(255,255,255,0.3)'
  },
  time: {
    color: '#e4e4e4',
    fontFamily: 'MaisonBook',
    fontSize: 16,
    textAlign: 'center'
  },
  forecastWrapper: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  forecastInner: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  index: {
    width: 46,
    paddingTop: 8,
    paddingBottom: 6,
    marginBottom: 6,
    color:'white',
    backgroundColor: '#1a1a1a',
    fontFamily: 'MaisonBold',
    fontSize: 22,
    textAlign: 'center'
  },
  forecast: {
    color: '#e4e4e4',
    fontFamily: 'MaisonMono',
  }
});
