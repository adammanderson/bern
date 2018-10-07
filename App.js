import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';
import store from './redux/store';
import { themeColours } from './utils/colours';

import Region from './components/Region';
import Settings from './components/Settings';

export default class App extends React.Component {
  state = {
    loaded: false,
    postcode: 'SW179PW',
    settingsVisible: false
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      MaisonBook: require('./assets/fonts/MaisonNeue-Book.ttf'),
      MaisonBold: require('./assets/fonts/MaisonNeue-Bold.ttf'),
      MaisonMono: require('./assets/fonts/MaisonNeue-Mono.ttf')
    });
    this.setState({loaded: true});
  }

  handleSettingsVisible = (visible) => {
    this.setState({settingsVisible: visible});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Region
            postcode={this.state.postcode}
            handleSettingsVisible={this.handleSettingsVisible}
          />
          <Settings
            settingsVisible={this.state.settingsVisible}
            handleSettingsVisible={this.handleSettingsVisible}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColours.dark,
  }
});
