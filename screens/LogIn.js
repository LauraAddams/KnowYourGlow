import React from 'react';
import { View, Button, Text } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput } from 'react-native-elements';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBu80KqAdLTppr_x7fUKpx99l8UhoQQ8Kg',
      authDomain: 'adacap-4f6a8.firebaseapp.com',
      databaseURL: 'https://adacap-4f6a8.firebaseio.com',
      projectId: 'adacap-4f6a8',
      storageBucket: 'adacap-4f6a8.appspot.com',
      messagingSenderId: '64389517477',
    });
  }


  onLoginPress() {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this.props.navigation.navigate('Tabs');
      })
      .catch(() => {
        this.setState({ error: 'Authentication failed', loading: false });
      });
  }

  onSignUpPress() {
    this.setState({ error: '', loading: true });

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this.props.navigation.navigate('Tabs');
      })
      .catch(() => {
        this.setState({ error: 'Sign up failed', loading: false });
      });
  }

  renderButtonOrLoading() {
    if (this.state.loading) {
      return <Text>Loading</Text>
    }

    return (
      <View>
        <Button
          onPress={this.onLoginPress.bind(this)}
          title="Login"
        />
        <Button
          onPress={this.onSignUpPress.bind(this)}
          title="Sign Up"
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={email => this.setState({ email })} />
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={password => this.setState({ password })} />
        {this.renderButtonOrLoading()}
      </View>
    );
  }
}
