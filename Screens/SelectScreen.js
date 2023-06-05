import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SelectScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>이용하실 시스템을 선택해주세요</Text>
      <View style={{height: 68}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>알림</Text>
        <Text style={styles.text2}>시스템</Text>
      </TouchableOpacity>
      <View style={{height: 115}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>관리</Text>
        <Text style={styles.text2}>시스템</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: '700',
  },
  text2: {
    fontSize: 31,
    fontWeight: '700',
    letterSpacing: 1.76,
    lineHeight: 38,
  },
  subContainer: {
    width: 220,
    height: 150,
    backgroundColor: '#FFC45E',
    borderRadius: 21,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectScreen;
