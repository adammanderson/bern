import React from 'react'
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CurrentStatus from '../CurrentStatus';
import Tips from '../Tips';
import Detail from '../Detail';

import { getRegional } from '../../redux/reducer';

class Region extends React.Component {

  componentDidMount() {
    this.props.getRegional('CV3');
  }

  renderItem = ({ item }) => (
    <View>
      <Text>{item.regionid}</Text>
    </View>
  )

  render() {
    const { loading, region } = this.props;
    const regionData = !!region.data && region.data[0];
    const index = !!regionData && regionData.intensity.index || 'unclear';
    const mix = !!regionData && regionData.generationmix;

    return (
      <ScrollView style={styles.container}>
        <Button
          title='Update'
          onPress={() => this.props.getRegional('CV3')}
        />
        <CurrentStatus
            index={index}
            value="550"
          adjective="whopping"
        />
        <Tips />
        <Detail
          mix={mix}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  let storedRegion = {...state.region, 'key': state.region.regionid}
  return {
    region: storedRegion,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  getRegional
};

export default connect(mapStateToProps, mapDispatchToProps)(Region);
