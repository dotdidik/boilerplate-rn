import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base';
import {Image, StyleSheet} from 'react-native';
import AppHeader from '../common/AppHeader';
import { Actions } from 'react-native-router-flux';

export default class UserDetail extends Component {
  render() {
    console.log(this.props)
    const {title, categories, content} = this.props.pdetail
    return (
      <Container>
        <AppHeader 
          icon = 'arrow-back'
          buttonLeft={()=> Actions.pop()}
          title='Detail'
        />
        <Content>
          <Text>{title}</Text>
          <Image source={{uri: categories}} style={styles.userImage}/>
          <Text>{content}</Text>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  userImage:{
    width: 200,
    height: 200
  }
})