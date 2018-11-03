import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modal';

import { fetchProduct, fetchProducts } from '../api/helper';
import { CONTAINER, BLACK } from '../config/styles';
import text from '../config/text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 140,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    flex: 1,
  },
  exitIcon: {
    color: BLACK,
    padding: 2,
    borderWidth: 2,
    borderColor: BLACK,
    borderRadius: 13,
    marginLeft: 230,
    marginTop: 10,
  },
});

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
    fetch(fetchProducts(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
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
    this._query(fetchProduct(this.state.id));
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

  _onPressClose = () => {
    this.setState({ visibleModal: null });
  }

  _renderButton = (input, onPress) => (
    <Text style={text.smallBold} onPress={onPress}>{input}</Text>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={{ flex: 1 }}>
        <Icon name="close" size={18} borderRadius={20} iconStyle={styles.exitIcon} onPress={this._onPressClose} />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Icon type="material-community" name="heart" color={BLACK} size={70} />
        <Text style={[text.medium, { fontSize: 22 }]}>THANK YOU FOR</Text>
        <Text style={[text.medium, { fontSize: 22 }]}>HELPING US GROW</Text>
      </View>
      <View style={{flex: 1}}>
        {this._renderButton('Go to Product', this._addedProduct)}
      </View>
    </View>
  );

  render() {
    return (
      <View style={[CONTAINER.container, { paddingTop: 0 }]}>
        <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>
        <Image source={require('../assets/add.png')} style={{ flex:1, resizeMode: 'contain', marginBottom: 35, marginTop: 30 }} />

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
            style={[CONTAINER.inputForm, { marginBottom: 35 }]}
            value={this.state.inputIng}
            onChange={this._onIngChanged}
            placeholder="Water, Dimethicone, Aloe, ..."
          />

          <Button
            containerViewStyle={{ position: 'absolute', bottom: 0, left: -15, right: -15 }}
            buttonStyle={{padding: 7}}
            textStyle={{ fontWeight: '600' }}
            iconRight={{ name: 'keyboard-arrow-right', size: 24 }}
            title="COMPLETE"
            backgroundColor={BLACK}
            onPress={this._onButtonPress}
          />
        </View>
      </View>
    );
  }
}
