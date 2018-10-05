import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './redux/reducer';

import Region from './components/Region';

const client = axios.create({
  baseURL: 'https://api.carbonintensity.org.uk/',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  state = {
    loaded: false,
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

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Region />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b242a',
  }
});
