import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

function ManageScreen8({route}) {
  const navigation = useNavigation();
  const Deliverer = route.params ? route.params.Deliverer : null;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>사용하실 기능을 선택해주세요</Text>
      <View style={{height: 85}} />
      <TouchableOpacity
        style={styles.subContainer}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Manage16', {Deliverer});
        }}>
        <Text style={styles.text2}>택배등록</Text>
      </TouchableOpacity>
      <View style={{height: 136}} />
      <TouchableOpacity
        style={styles.subContainer}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Manage19', {Deliverer});
        }}>
        <Text style={styles.text2}>택배수거</Text>
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

export default ManageScreen8;
