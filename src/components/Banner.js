import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/1.png')} />
      <View style={styles.title}>
        <Text style={styles.part1}>Save axtra on every order</Text>
        <Text style={styles.part2}>
          Etiam mollis metus non faucibus sollivitudin.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 361,
    height: 203,
    left: 8,
    top: 56,
  },
  logo: {
    width: 360,
    height: 200,
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    width: 200,
    height: 45,
    left: 30,
    top: 50,
  },
  part1: {
    fontFamily: 'Overpass',
    fontSize: 18,
    width: 118,
    height: 42,
    top: 10,
    left: 41,
    color: '#1987FB',
  },
  part2: {
    fontFamily: 'Overpass',
    fontSize: 12,
    width: 124,
    height: 32,
    top: 20,
    left: 41,
  },
});
export default Banner;