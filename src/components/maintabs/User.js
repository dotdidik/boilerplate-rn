import React, { Component } from 'react'
import { View, Container, Content, Text } from 'native-base';
import AppHeader from '../common/AppHeader';

export default class User extends Component {
  render() {
    return (
      <Container>
        <AppHeader 
            title="User"
        />
        <Content>
            <Text> This is user tab </Text>
        </Content>
      </Container>
    )
  }
}
