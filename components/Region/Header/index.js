import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Settings from './settings';
import Refresh from './refresh';
import { themeColours } from '../../../utils/colours';

const Header = (props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity  style={styles.settings} onPress={() => {props.handleSettingsVisible(true)}}>
        <Settings
          fill='white'
          size={28}
        />
      </TouchableOpacity>
      <Text style={styles.label}>{props.address.admin_district}</Text>
      <TouchableOpacity  style={styles.refresh} onPress={props.onRefresh}>
        <Refresh
          fill='white'
          size={28}
        />
      </TouchableOpacity>
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
  },
  settings: {
    padding: 5,
  },
  refresh: {
    padding: 5,
  }
});

export default Header;
