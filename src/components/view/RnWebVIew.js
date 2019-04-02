import React, { Component } from 'react'
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from "react-native-webview";
import { Container, Content } from 'native-base';
import AppHeader from '../common/AppHeader';

export default class RnWebView extends Component {
  render() {
    return (
      <Container>
        <AppHeader/>
        <Content>
            <WebView
                source={{ uri:this.props.nview.categories }}
                style={{ marginTop: 20 }}
            />
        </Content>
      </Container>
    )
  }
}
