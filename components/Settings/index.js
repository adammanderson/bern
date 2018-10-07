import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, FlatList, Alert, Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import Header from '../Header';
import { themeColours } from '../../utils/colours';
import { getRegional, getAddress } from '../../redux/reducer';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  selectLocation(postcode) {
    this.props.getAddress(postcode);
    this.props.handleSettingsVisible(false);
  }

  renderFirstListItem(item) {
    return (
      <TouchableOpacity style={styles.firstListItem} onPress={() => this.selectLocation(item.postcode)}>
        <Text style={styles.listItemLabel}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  renderListItem(item) {
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => this.selectLocation(item.postcode)}>
        <Text style={styles.listItemLabel}>{item.key}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    console.log(this.props.settingsVisible)
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.settingsVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.wrapper}>
          <Header
            label='Settings'
          />
          <View style={styles.container}>
            <Text style={styles.heading}>Location</Text>
            <FlatList
              style={styles.list}
              data={[
                {key: 'Wandsworth', postcode: 'SW179PW'},
                {key: 'Coventry', postcode: 'CV31AJ'},
                {key: 'Kate', postcode: 'WF10 2DR'}
              ]}
              renderItem={({item, index}) => index === 0 ? this.renderFirstListItem(item) : this.renderListItem(item)}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: themeColours.dark,
  },
  container: {
    flex: 1,
    margin: 15,
  },
  heading: {
    marginBottom: 10,
    fontFamily: 'MaisonBold',
    fontSize: 15,
    color: 'white'
  },
  list: {
    flexGrow: 0,
    paddingHorizontal: 15,
    backgroundColor: themeColours.darkish,
    borderRadius: 4
  },
  listItem: {
    flex: 1,
    paddingVertical: 15,
    borderTopColor: 'rgba(255,255,255,0.4)',
    borderTopWidth: 0.5
  },
  firstListItem: {
    flex: 1,
    paddingVertical: 15,
  },
  listItemLabel: {
    color: 'white',
    fontFamily: 'MaisonBook',
    fontSize: 16,
  }
});

const mapStateToProps = state => {
  return {
    loading: state.loading,
    address: state.address
  };
};

const mapDispatchToProps = {
  getRegional,
  getAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
