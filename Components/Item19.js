import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Item19({one, two, three, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.text1}>{one}</Text>
      <Text style={styles.text1}>{two}</Text>
      <Text style={three === '수거대기' ? styles.text2 : styles.text3}>
        {three}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 80,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  text1: {
    fontSize: 16,
    fontWeight: '500',
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
    paddingRight: 10,
  },
  text3: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    paddingRight: 10,
  },
});

export default Item19;
