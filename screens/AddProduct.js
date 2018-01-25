import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

import { CONTAINER, GRAY } from '../config/styles';
import text from '../config/text';
import ModalContainer from '../components/Modal';

function url(id) {
  return `https://skincare-api.herokuapp.com/products/${id}`;
}

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      inputBrand: '',
      inputName: '',
      inputIng: '',
      visibleModal: null,
      id: '',
    };
  }

  _onBrandChanged = (event) => {
    this.setState({ inputBrand: event.nativeEvent.text });
  };

  _onNameChanged = (event) => {
    this.setState({ inputName: event.nativeEvent.text });
  };

  _onIngChanged = (event) => {
    this.setState({ inputIng: event.nativeEvent.text });
  };

  _onButtonPress = () => {
    fetch('https://skincare-api.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        brand: this.state.inputBrand,
        name: this.state.inputName,
        ingredients: this.state.inputIng,
      }),
    })
      .then(json => json.json())
      .then(json => this.setState({ visibleModal: 1, id: json.id }))

      .catch(error =>
        this.setState({ message: `An error occured ${error}` }));
  };

  _addedProduct = () => {
    this.setState({ visibleModal: null });
    this._query(url(this.state.id));
  };

  _query = (query) => {
    fetch(query)
      .then(response => response.json())
      .then(json => this._response(json))
      .catch(error =>
        this.setState({ message: `Something bad happened ${error}` }));
  };

  _response = (response) => {
    if (response) {
      this.props.navigation.navigate('Product', response);
    } else {
      this.setState({ message: 'Not recognized; please try again.' });
    }
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={styles.great}>OK</Text>
      {this._renderButton('Go to Product', this._addedProduct)}
    </View>
  );

  render() {
    return (
      <View style={CONTAINER.container}>
        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>

        <Text style={text.smallBold}>Add your favorite product to our inventory</Text>

        <View style={CONTAINER.form}>
          <Text style={text.small}>BRAND</Text>
          <TextInput
            style={CONTAINER.inputForm}
            value={this.state.inputBrand}
            onChange={this._onBrandChanged}
            placeholder="Dr.Jart+"
          />
        <Text style={text.small}>NAME</Text>
          <TextInput
            style={CONTAINER.inputForm}
            value={this.state.inputName}
            onChange={this._onNameChanged}
            placeholder="Essence serum"
          />
        <Text style={text.small}>INGREDIENTS</Text>
          <TextInput
            style={[CONTAINER.inputForm, {marginBottom: 50}]}
            value={this.state.inputIng}
            onChange={this._onIngChanged}
            placeholder="Water, Dimethicone, Aloe, ..."
          />

          <Button
            containerViewStyle={{ position: 'absolute', bottom: 0, left: -15, right: -15}}
            textStyle={{ fontWeight: '600' }}
            iconRight={{ name: 'keyboard-arrow-right', size: 24 }}
            title="COMPLETE"
            backgroundColor="#C0D2E3"
            onPress={this._onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  great: {
    width: 144,
    height: 144,
    backgroundColor: 'gold',
    borderRadius: 70,
    overflow: 'hidden',
    paddingTop: 23,
    fontSize: 80,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'pink',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
