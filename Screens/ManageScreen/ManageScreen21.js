import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function ManageScreen21() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/Successmark.png')} />
      <View style={{height: 30}} />
      <Text style={styles.text1}>수거가 완료되었습니다</Text>
      <Text style={styles.text2}>더 수거하실 택배가 있으신가요?</Text>
      <View style={{height: 40}} />
      <TouchableOpacity
        style={styles.button}
        onPress={null}
        activeOpacity={0.7}>
        <Text style={styles.text}>있음</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={null}
        activeOpacity={0.7}>
        <Text style={styles.text}>없음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3E7',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 56,
    backgroundColor: '#1E232C',
    borderRadius: 10,
    marginVertical: 11,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text1: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 40,
  },
  text2: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8391A1',
  },
});

export default ManageScreen21;
