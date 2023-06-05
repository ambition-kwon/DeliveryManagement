import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Item19({one, two, three}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={null}>
      <Text style={styles.text1}>{one}호</Text>
      <Text style={styles.text1}>{two}</Text>
      <Text style={styles.text1}>{three}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 35,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  text1: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Item19;
