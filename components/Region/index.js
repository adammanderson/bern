import React from 'react'
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import CurrentStatus from '../CurrentStatus';
import Tips from '../Tips';
import Detail from '../Detail';

import { getRegional, getAddress } from '../../redux/reducer';

class Region extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAddress(this.props.postcode);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.address.outcode !== nextProps.address.outcode) {
      this.props.getRegional(nextProps.address.outcode)
    }
  }

  render() {
    const { loading, region, address } = this.props;
    const regionData = !!region.data && region.data[0];
    const index = !!regionData && regionData.intensity.index || 'unclear';
    const mix = !!regionData && regionData.generationmix;

    return (
      <React.Fragment>
        <Header
          address={this.props.address}
          onRefresh={() => this.props.getRegional(address.outcode)}
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
    address: state.address
  };
};

const mapDispatchToProps = {
  getRegional,
  getAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Region);
