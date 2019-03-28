import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { View, Text, Container, Content, Button } from 'native-base';
import AppHeader from '../common/AppHeader';
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            categories: '',
            content: ''
        }
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
    return (
      <Container>
        <AppHeader 
            icon='arrow-back'
            title='ADD USER'
            buttonLeft={() => Actions.pop()}
        />
        <Content>
            <TextInput
                style={{height: 40}}
                placeholder="Title"
                onChangeText={(title) => this.setState({title})}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Image Link"
                onChangeText={(categories) => this.setState({categories})}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Content"
                onChangeText={(content) => this.setState({content})}
            />
            <Button onPress={this.handleSubmit}><Text>Submit</Text></Button>
        </Content>
      </Container>
    )
  }
}
