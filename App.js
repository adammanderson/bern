import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import CurrentStatus from './components/CurrentStatus';
import Tips from './components/Tips';
import Detail from './components/Detail';

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
      <View style={styles.container}>
        <CurrentStatus
          index="very high"
          value="550"
          adjective="whopping"
        />
        <Tips />
        <Detail />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#1b242a',
  }
});
