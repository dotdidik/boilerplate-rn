import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View, Container, Content, Text, Footer, Button } from 'native-base';
import AppHeader from '../common/AppHeader'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import AppCArd from '../common/AppCard';

class AppHome extends Component {
  state={
    news: []
  }

  componentDidMount(){
    axios.get("https://reduxblog.herokuapp.com/api/posts?key=newsrn")
    .then(res => {
        this.setState({
          news: res.data
        })
    });
  }

  render() {
    return (
        <Container>
          <AppHeader 
            icon='menu'
            title='HOME'
            right= 'logo-google'
          />
          <Content>
          <Text> News </Text>
            {
              this.state.news.map((n, index)=>
                <View key={index}>
                  <AppCArd
                    img={n.content}
                    title={n.title}
                    buttonPress= {() => Actions.rnwebview({nview : n}) } 
                  />
              </View>  
              )
            }
          </Content>
        </Container>
    )
  }
}

export default AppHome;

const styles = StyleSheet.create({
  textBody:{
    color: 'red'
  }
})
