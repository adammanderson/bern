import React from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import Bot from '../Bot'
import { statusColours } from '../../utils/colours';

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
      outputRange: [statusColours[this.state.prevIndex], statusColours[index]]
    });

    return (
      <Animated.View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={styles.botWrapper}>
          <Bot index={index} />
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.text}>
            Energy usage in your area is producing
            <Text style={styles.bold}>
               {` ${index} `}
            </Text>
            CO₂ emissions
          </Text>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
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
