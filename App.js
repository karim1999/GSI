import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CalendarSearch from './src/screens/app/Search/CalendarSearch';


export default class App extends Component {

  render() {
    return (
      <CalendarSearch/>
    );
  }
}
