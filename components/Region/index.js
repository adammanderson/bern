import React from 'react'
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import CurrentStatus from '../CurrentStatus';
import Tips from '../Tips';
import Detail from '../Detail';

import { getRegional, getPostcode } from '../../redux/reducer';

class Region extends React.Component {

  componentDidMount() {
    this.props.getRegional('SW17');
    this.props.getPostcode('SW179PB');
  }

  render() {
    const { loading, region } = this.props;
    const regionData = !!region.data && region.data[0];
    const index = !!regionData && regionData.intensity.index || 'unclear';
    const mix = !!regionData && regionData.generationmix;

    return (
      <React.Fragment>
        <Header
          postcode={this.props.postcode}
          onRefresh={() => this.props.getRegional('B1')}
        />
        <ScrollView style={styles.container}>
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
      </React.Fragment>
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
    loading: state.loading,
    region: storedRegion,
    postcode: state.postcode
  };
};

const mapDispatchToProps = {
  getRegional,
  getPostcode
};

export default connect(mapStateToProps, mapDispatchToProps)(Region);
