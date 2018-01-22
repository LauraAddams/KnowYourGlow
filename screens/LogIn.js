import React from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput, Button, SocialIcon, Icon } from 'react-native-elements';
import { CONTAINER, GRAY, BLACK } from '../config/styles';


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
        this.props.navigation.navigate('Home');
      })
      .catch(() => {
        this.setState({error: 'Authentication failed', loading: false});
      })
  }

  onSignUpPress() {
    this.setState({error: '', loading: true});

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false });
        this.props.navigation.navigate('Home');
      })
      .catch(() => {
        this.setState({error: 'Sign up failed', loading: false});
      })
  }

  renderButtonOrLoading() {
    if (this.state.loading) {
      return <Text>Loading</Text>
    }

    return (
      <View style={{marginTop: 5}}>
        <Button
          raised
          rounded={true}
          borderRadius={25}
          fontSize={12}
          backgroundColor={BLACK}
          onPress={this.onLoginPress.bind(this)}
          title="LOGIN"
        />

        <Text
          style={{ textAlign: 'center', color: BLACK, margin: 10, fontSize: 12 }}
          onPress={this.onSignUpPress.bind(this)}
        >
          SIGN UP
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={CONTAINER.container}>
        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='broken-image' size={100} />
        </View>

        <View style={{ flex: 2, width: 300, justifyContent: 'center' }}>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="name@email.com"
            />

          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.state.password}
            secureTextEntry
            placeholder="********"
            onChangeText={password => this.setState({ password })}
            />
          <Text style={{ color: GRAY, textAlign: 'right', marginTop: 5, marginRight: 18}}>
            Forgot Password?
          </Text>

          <Text>{this.state.error}</Text>
          {this.renderButtonOrLoading()}

          <View style={{ flex: 2, margin: 20 }}>
            <View>
              <Text style={{ height: 1, backgroundColor: '#999', marginBottom: -8 }} />
              <Text style={{ textAlign: 'center', width: 130, alignSelf: 'center', fontSize: 12, marginBottom: 5, color: '#999' }}>
                OR CONNECT WITH
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <SocialIcon title="Facebook" button type="facebook" style={{ flex: 1, height: 30 }} fontStyle={{ fontSize: 11 }} iconSize={16} />
              <SocialIcon title="Twitter" button type="twitter" style={{ flex: 1, height: 30 }} fontStyle={{ fontSize: 11 }} iconSize={16} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
