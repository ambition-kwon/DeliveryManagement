import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function LoginCustomButton({onPress, title}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LoginCustomButton;
