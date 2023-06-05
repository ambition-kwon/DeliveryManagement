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
    backgroundColor: '#1E232C',
    borderRadius: 10,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginCustomButton;
