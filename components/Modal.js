/* eslint-disable */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import text from '../config/text';

export default class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isVisible,
    };
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible) {
      this.setState({ isModalVisible: nextProps.isVisible });
    }
  }

  _navigate = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.goBack();
  }

  _onPressMorning = () => {
    this.props.addType('morning');
  }

  _onPressEvening = () => {
    this.props.addType('evening');
  }

  _onPressBoth = () => {
    this.props.addType('both');
  }

  render() {
    return (
      <View>
        <Modal style={styles.modalContainer} isVisible={this.state.isModalVisible}>
          <View style={styles.content}>
            <View style={styles.content}>
              <Text style={text.medium}>Add to Routine:</Text>
              <Button
                raised
                buttonStyle={{ height: 30, width: 200, backgroundColor: '#F5CBAA' }}
                borderRadius={25}
                icon={{name: 'ios-sunny', type: 'ionicon'}}
                title="Morning"
                onPress={this._onPressMorning}
                />

              <Button
                raised
                buttonStyle={{ height: 30, width: 200, backgroundColor: '#A7B8B6' }}
                borderRadius={25}
                icon={{name: 'ios-moon', type: 'ionicon'}}
                title="Evening"
                onPress={this._onPressEvening}
                />

              <Button
                raised
                buttonStyle={{ height: 30, width: 200, backgroundColor: '#496354' }}
                borderRadius={25}
                icon={{name: 'ios-sunny', type: 'ionicon'}}
                iconRight={{name: 'ios-moon', type: 'ionicon'}}
                title="Both"
                onPress={this._onPressBoth}
                />
            </View>

            <TouchableOpacity onPress={this._navigate}>
              <Text>Go Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    margin: 150,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
  },
  content: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
