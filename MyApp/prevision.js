import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

class Prevision extends Component {
  render() {
    return (
      <View style={styles.prevision}>
        <Text style={styles.previsionDay}>{this.props.day}</Text>
        <Image style={{
          width: 30,
          height: 30,
          marginRight: 10,
        }} source={require('./images/sun.jpg')} />
        <View style={styles.spacer}/>
        <Text style={styles.previsionTempMax}>{this.props.tempMax}</Text>
        <Text style={styles.previsionTempMin}>{this.props.tempMin}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  prevision: {
    // backgroundColor: '#ff0000',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spacer: {
    flex: 1,
  },
  previsionDay: {
    color: '#fff',
    marginRight: 10,
    width: 100,
  },
  previsionTempMax: {
    color: '#fff',
    marginRight: 10,
  },
  previsionTempMin: {
    color: '#c1c1c1',
    marginRight: 10,
  },
});


export default Prevision;
