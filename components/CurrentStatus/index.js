import React from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import Bot from '../Bot'
import colours from '../../utils/colours';

class CurrentStatus extends React.Component {
  constructor(props) {
    super(props);
    this.interpolatedColor = new Animated.Value(0);
    this.state = {
      prevIndex: 'unclear'
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.index !== nextProps.index) {
      this.setState({
        prevIndex: this.props.index
      }, () => {
        this.interpolatedColor.setValue(0)
        Animated.timing(this.interpolatedColor, {
          duration: 800,
          toValue: 1,
        }).start();
      })
    }
  }

  render() {
    const { index, value, adjective } = this.props;
    let backgroundColor = this.interpolatedColor.interpolate({
      inputRange: [0, 1],
      outputRange: [colours[this.state.prevIndex], colours[index]]
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={styles.botWrapper}>
          <Bot index={index} />
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.text}>
            Electricity consumption in your area is creating
            <Text style={styles.bold}>
               {` ${index} `}
            </Text>
            CO₂ emissions.
          </Text>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 0,
    padding: 12,
    alignItems: 'center',
    borderRadius: 4
  },
  botWrapper: {

  },
  statusWrapper: {
  },
  text: {
    fontFamily: 'MaisonBook',
    fontSize: 16,
    lineHeight: 22,
    color: '#e4e4e4',
    textAlign: 'center'
  },
  bold: {
    fontFamily: 'MaisonBold',
    color: 'white'
  },
  mono: {
    fontFamily: 'MaisonMono',
    fontSize: 17,
    lineHeight: 21,
    color: 'white'
  }
});

export default CurrentStatus
