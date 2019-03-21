import React, {Component} from 'react';
import {Footer, FooterTab, Icon, Button, Text} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor() {
    super();
    this.state = {
      activeTabName: 'home'
    };
  }

  tabAction(tab) {
    this.setState({activeTabName: tab});
     if (tab === 'home') {
      Actions.home();
    } else if(tab === 'user') {
      Actions.user()
    }
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={(this.state.activeTabName === "home")? true: false}
            onPress={() => {this.tabAction('home')}}>
            <Icon name="ios-egg"/>
            <Text>Home</Text>
          </Button>
          <Button
            active={(this.state.activeTabName === "user")? true: false}
            onPress ={() => {this.tabAction('user')}}>
            <Icon name="person"/>
            <Text>User</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}