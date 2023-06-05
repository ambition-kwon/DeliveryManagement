import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';

function ManageScreen25() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.text1}>안면사진 확인에대한</Text>
        <Text style={styles.text1}>사유를 입력해주세요</Text>
        <View style={{height: 32}} />
        <Image source={require('../../assets/Vector1.png')} />
        <View style={{height: 32}} />
        <CustomInput
          placeholder={'확인사유(예. 5/5일자 택배 분실에 대한 조사)'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <LoginCustomButton title={'안면사진 확인'} onPress={null} />
        <View style={{height: 160}} />
      </View>
    </TouchableWithoutFeedback>
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
});

export default ManageScreen25;
