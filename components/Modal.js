import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

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

  render() {
    return (
      <View>
        <Modal style={styles.modalContent} isVisible={this.state.isModalVisible}>
        <View>
            <Text>Good job</Text>
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
  modalContent: {
    backgroundColor: 'white',
    margin: 150,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
