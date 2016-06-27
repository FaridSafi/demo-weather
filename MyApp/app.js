/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import Prevision from './prevision.js';

class MyApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      city: '',
      status: '',
      temperature: 0,
    };
  }

  componentWillMount() {

    setTimeout(() => {
      const data = require('./data.json');
      this.setState({
        city: data.current_observation.display_location.full,
        temperature: data.current_observation.temp_c,
      });
    }, 1000);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.city}>
          {this.state.city}
        </Text>
        <Text style={styles.status}>
          {this.state.status}
        </Text>
        <Text style={styles.temperature}>
          {this.state.temperature}
        </Text>

        <View style={styles.previsions}>
          <Prevision day='Dimanche' tempMax={26} tempMin={16}/>
          <Prevision day='Lundi' tempMax={26} tempMin={16}/>
          <Prevision day='Mardi' tempMax={26} tempMin={16} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0091C2',
  },
  city: {
    marginTop: 20,
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  status: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  temperature: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '100',
  },
  previsions: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#ff0000',
  },
});

export default MyApp;
