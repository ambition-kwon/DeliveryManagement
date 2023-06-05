import React from 'react';
import {Keyboard, StyleSheet, TextInput} from 'react-native';

function CustomInput({
  placeholder,
  value,
  onChangeText,
  autoComplete,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={styles.textBox}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={() => {
        Keyboard.dismiss();
      }}
      autoCapitalize={'none'}
      autoCorrect={false}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      passwordRules={null}
    />
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 15,
    borderWidth: 3,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 330,
    height: 56,
    backgroundColor: '#F7F8F9',
    marginVertical: 7.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default CustomInput;
