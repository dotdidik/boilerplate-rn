import React, { Component } from 'react'
import { Header, Left, Body, Right, Text, Title, Button, Icon } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
            <Left>
            <Button transparent>
                <Icon name={this.props.icon} />
            </Button>
            </Left>
            <Body><Title>{this.props.title}</Title></Body>
            <Right>
                <Button transparent>
                    <Icon name={this.props.right} />
                </Button>
            </Right>
        </Header>
    )
  }
}
