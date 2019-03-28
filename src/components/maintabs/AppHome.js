import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View, Container, Content, Text, Footer, Button } from 'native-base';
import AppHeader from '../common/AppHeader'
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

class AppHome extends Component {
  state={
    products: [],
    title:''
  }

  componentDidMount(){
    axios.get("https://reduxblog.herokuapp.com/api/posts?key=products3")
    .then(res => {
        this.setState({
          products: res.data
        })
    });
  }

  updateData(){
    axios.get("https://reduxblog.herokuapp.com/api/posts?key=products3")
    .then(res => {
        this.setState({
          products: res.data
        })
    });
  }

  handleSubmit= event => {
    event.preventDefault()
    axios.post("https://reduxblog.herokuapp.com/api/posts?key=products3",
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
    return (
        <Container>
          <AppHeader 
            icon='menu'
            title='HOME'
            right= 'logo-google'
          />
          <Content>
          <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(title) => this.setState({title})}
            />
            <Text style={styles.textBody}> {this.state.title}</Text>
            <Button onPress={this.handleSubmit}><Text>Submit</Text></Button>

            {
              this.state.products.map(prod=>
                <View key={prod.id}>
                  <Text>
                    {prod.title}
                  </Text>
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
