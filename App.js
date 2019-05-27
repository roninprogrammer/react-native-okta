import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';

class AppInit extends Component {
  
  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Dashboard 
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }
 
}
 
AppRegistry.registerComponent('AppInit', () => AppInit);