import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View, Container, Content, Text, Footer, Button, List, ListItem, Thumbnail, Left, Body, Right, Spinner } from 'native-base';
import AppHeader from '../common/AppHeader'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

class User extends Component {
  state={
    products: [],
    title:''
  }

  componentDidMount(){
    axios.get("https://reduxblog.herokuapp.com/api/posts?key=user")
    .then(res => {
        this.setState({
          products: res.data
        })
    });
  }

  updateData(){
    axios.get("https://reduxblog.herokuapp.com/api/posts?key=user")
    .then(res => {
        this.setState({
          products: res.data
        })
    });
  }

  handleSubmit= event => {
    event.preventDefault()
    axios.post("https://reduxblog.herokuapp.com/api/posts?key=user",
    {
        title: this.state.title,
        categories: this.state.categories,
        content: this.state.content
    }
    )
    .then(res => {
      alert('article was added')
      this.updateData()
        Actions.user()
    }
  )
  }

  render() {
    let adaData;
    if(this.state.products.length === 0){
      adaData = <Spinner color='blue' />
    } else {
      adaData =  
      <List>
      {
        this.state.products.map((prod, index)=>
          <ListItem thumbnail key={index}> 
              <Left>
                <Thumbnail square source={{ uri: prod.categories }} />
              </Left>
              <Body>
                <Text>{prod.title}</Text>
                <Text note numberOfLines={1}>{prod.content}</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.userdetail({pdetail : prod})}>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>
        )
      }
      </List>
    }
    return (
        <Container>
          <AppHeader 
            icon='menu'
            title='USER'
            right='md-add'
            buttonRight= {() => Actions.adduser()}
          />
          <Content>
            {adaData}
          </Content>
        </Container>
    )
  }
}

export default User;

const styles = StyleSheet.create({
  textBody:{
    color: 'red'
  }
})
