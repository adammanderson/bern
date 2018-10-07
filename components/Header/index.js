import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { themeColours } from '../../utils/colours';

const Header = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 4,
    paddingHorizontal: 8,
    backgroundColor: themeColours.dark
  },
  label: {
    flex: 1,
    fontFamily: 'MaisonBold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
  }
});

export default Header;
