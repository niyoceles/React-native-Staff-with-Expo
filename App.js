import _ from 'lodash';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MainScreen from './screens/MainScreen';
import WelcomeScreen from './screens/WelcomeScreen';
// console.reportErrorsAsExceptions = false;
// import Users from './components/Users'
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import store from './store';

// apollo client setup

const client = new ApolloClient({
  uri: 'https://mycomplex.herokuapp.com'
});

class App extends Component {
  state = {
    token: null
  };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    let runThisScreen = <WelcomeScreen />;
    if (this.state.token) {
      runThisScreen = <MainScreen />;
    }

    return (
      <ApolloProvider client={client}>
        <Provider store={store}>{runThisScreen}</Provider>
      </ApolloProvider>
    );
  }
}

export default App;
