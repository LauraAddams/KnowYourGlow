import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { BLACK, PINK, TEAL, YELLOW } from '../config/styles';
import text from '../config/text';

export default class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: this.props.isVisible,
      routineAdded: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible) {
      this.setState({ isModalVisible: nextProps.isVisible });
    }
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  _navigate = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.goBack();
  }

  _onPressClose = () => {
    this.props.resetVisible();
  }

  _onPressMorning = () => {
    this.setState({ routineAdded: true });
    this.props.addType('morning');
  }

  _onPressEvening = () => {
    this.setState({ routineAdded: true });
    this.props.addType('evening');
  }

  _onPressBoth = () => {
    this.setState({ routineAdded: true });
    this.props.addType('both');
  }

  render() {
    const viewType = this.state.routineAdded ?
      (<View style={[styles.content, {justifyContent: 'center', padding: 10}]}>
        <Icon type="material-community" name="creation" color={BLACK} size={90} />
        <Text style={[text.medium, {fontSize: 22, textAlign: 'center'}]}>Added to your routine</Text>
      </View>) :
      (<View style={styles.content}>
        <Text style={text.medium}>Add to Routine:</Text>
        <Button
          raised
          buttonStyle={{ height: 30, width: 200, backgroundColor: YELLOW }}
          borderRadius={25}
          icon={{ name: 'ios-sunny', type: 'ionicon' }}
          title="Morning"
          onPress={this._onPressMorning}
        />

        <Button
          raised
          buttonStyle={{ height: 30, width: 200, backgroundColor: TEAL }}
          borderRadius={25}
          icon={{ name: 'ios-moon', type: 'ionicon' }}
          title="Evening"
          onPress={this._onPressEvening}
        />

        <Button
          raised
          buttonStyle={{ height: 30, width: 200, backgroundColor: PINK }}
          borderRadius={25}
          icon={{ name: 'ios-sunny', type: 'ionicon' }}
          iconRight={{ name: 'ios-moon', type: 'ionicon' }}
          title="Both"
          onPress={this._onPressBoth}
        />
      </View>);

    return (
      <View>
        <Modal style={styles.modalContainer} isVisible={this.state.isModalVisible}>
          <Icon name="close" size={18} borderRadius={20} iconStyle={styles.exitIcon} onPress={this._onPressClose}/>
          <View style={styles.content}>
            {viewType}

            <TouchableOpacity onPress={this._navigate}>
              <Text style={text.smallBold}>Back to search</Text>
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
    marginTop: 25,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  exitIcon: {
    color: BLACK,
    padding: 2,
    borderWidth: 2,
    borderColor: BLACK,
    borderRadius: 13,
    alignSelf: 'flex-end',
    margin: 10,
  },
});
