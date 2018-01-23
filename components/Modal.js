/* eslint-disable */
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
        <Modal style={styles.modalContainer} isVisible={this.state.isModalVisible}>
          <View style={styles.content}>
            <Text>Add to routine:</Text>

            <Button
              raised
              buttonStyle={{ height: 30, width: 200, backgroundColor: 'gold' }}
              borderRadius={25}
              iconRight={{name: 'ios-sunny', type: 'ionicon'}}
              title="Morning"
            />

            <Button
              raised
              buttonStyle={{ height: 30, width: 200, backgroundColor: 'navy' }}
              borderRadius={25}
              iconRight={{name: 'ios-moon', type: 'ionicon'}}
              title="Evening"
            />

            <Button
              raised
              buttonStyle={{ height: 30, width: 200, backgroundColor: 'navy' }}
              borderRadius={25}
              iconRight={{name: 'ios-moon', type: 'ionicon'}}
              title="Both"
            />

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
  },
  content: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
