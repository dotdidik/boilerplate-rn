import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class AppCArd extends Component {
  render() {
    return (
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: this.props.img}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {this.props.title}
                </Text>
                <Button onPress={this.props.buttonPress}><Text>detail</Text></Button>
              </Body>
            </CardItem>
          </Card>
    );
  }
}
