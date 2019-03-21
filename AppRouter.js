import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, StyleProvider, Container } from 'native-base';
import AppHome from './src/components/maintabs/AppHome';
import User from './src/components/maintabs/User';
import AppFooter from './src/components/view/Footer';

export default class AppRouter extends Component {
  render() {
    return (
            <Container>
                <Router>
                    <Scene key='root'>
                        <Scene key='home' hideNavBar component={AppHome} />
                        <Scene key='user' hideNavBar component={User} />
                    </Scene>
                </Router>
                <AppFooter />
            </Container>   
    )
  }
}
