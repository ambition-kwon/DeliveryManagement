import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function ManageScreen3() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>사용자 유형을 선택해주세요</Text>
      <View style={{height: 68}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>수취인</Text>
      </TouchableOpacity>
      <View style={{height: 40}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>배달인</Text>
      </TouchableOpacity>
      <View style={{height: 40}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>대리인</Text>
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
    height: 110,
    backgroundColor: '#FFC45E',
    borderRadius: 21,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ManageScreen3;
