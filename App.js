import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';

import { RootStack, Tabs } from './config/router';
import Store from './Store';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    return true;
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
          />
      );
    }
    return (
      <Provider store={Store}>
        <Tabs />
      </Provider>
    );
  }
}
