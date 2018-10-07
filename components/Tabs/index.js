import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { themeColours } from '../../utils/colours';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  handleActiveTab = (index) => {
    this.setState({
      activeTab: index
    });
  }

  render() {
    return(
      <View style={styles.wrapper}>
        <View
          style={styles.nav}
        >
          {React.Children.toArray(this.props.children).map((child, index) => {
            const isActiveTab = index === this.state.activeTab;
            return(
              <View
                key={index}
                style={isActiveTab ? styles.activeNavTab : styles.navTab}
                >
                <TouchableOpacity onPress={() => this.handleActiveTab(index)}>
                  <Text
                    style={isActiveTab ? styles.activeTabLabel : styles.tabLabel}
                    >
                      {child.props.label}
                    </Text>
                  </TouchableOpacity>
              </View>
            )
          })}
        </View>
        <View style={styles.tabContent}>
          {React.Children.toArray(this.props.children)[this.state.activeTab]}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: themeColours.darkish,
    borderRadius: 4,
  },
  nav: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingHorizontal: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.4)',
  },
  navTab: {
    flex: 1,
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  tabLabel: {
    paddingTop: 12,
    paddingBottom: 10,
    fontFamily: 'MaisonBook',
    fontSize: 16,
    color: '#e4e4e4',
    textAlign: 'center'
  },
  activeNavTab: {
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  activeTabLabel: {
    paddingTop: 12,
    paddingBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  tabContent: {
    flex: 1
  }
});
