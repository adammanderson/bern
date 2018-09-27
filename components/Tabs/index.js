import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  handleActiveTab = (index) => {
    console.log(index)
    this.setState({
      activeTab: index
    });
  }

  render() {
    return(
      <View style={styles.wrapper}>
        <ScrollView
          horizontal={true}
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
        </ScrollView>
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
  },
  nav: {
    flexGrow: 0,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.4)'
  },
  navTab: {
    marginRight: 40,
    borderBottomColor: 'transparent',
    borderBottomWidth: 2
  },
  tabLabel: {
    flex: 0,
    paddingTop: 12,
    paddingBottom: 10,
    fontFamily: 'MaisonBook',
    fontSize: 17,
    color: '#e4e4e4'
  },
  activeNavTab: {
    marginRight: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 2
  },
  activeTabLabel: {
    flex: 0,
    paddingTop: 12,
    paddingBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 18,
    color: 'white'
  },
  tabContent: {
    flex: 1
  }
});
