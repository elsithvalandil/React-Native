import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Albunes'}/>
        <AlbumList/>
      </View>
      
    );
  }
}