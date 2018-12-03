import React, { Component } from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

import {
  Wallpaper,
  Logo
} from '@components'

import LinearGradient from 'react-native-linear-gradient'
import firebase from 'react-native-firebase'

export default class Launch extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.props.navigation.navigate("Home")
      else
        this.props.navigation.navigate("Login")
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return (
      <Wallpaper>
        <Logo />
      </Wallpaper>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})