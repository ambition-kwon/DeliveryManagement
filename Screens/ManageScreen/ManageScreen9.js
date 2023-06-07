import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../../Contexts/DataContext';

function ManageScreen9() {
  const navigation = useNavigation();
  const {setToken} = useContext(DataContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>사용하실 기능을 선택해주세요</Text>
      <View style={{height: 85}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>택배 통합 조회</Text>
      </TouchableOpacity>
      <View style={{height: 136}} />
      <TouchableOpacity style={styles.subContainer} activeOpacity={0.7}>
        <Text style={styles.text2}>거주자 관리</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setToken('');
          navigation.reset({routes: [{name: 'Select'}]});
        }}>
        <View style={{height: 100}} />
        <Text style={styles.text3}>
          택배 관리 시스템을 종료하고 싶으신가요?
        </Text>
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
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A707C',
  },
});

export default ManageScreen9;
