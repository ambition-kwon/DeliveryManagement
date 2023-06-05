import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import RegisterCustomButton from '../../Components/RegisterCustomButton';

function ManageScreen6() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{height: 96}} />
        <View style={styles.subContainer}>
          <Text style={styles.text1}>대리인</Text>
          <Text style={styles.text1}>재 로그인</Text>
        </View>
        <View style={{height: 44}} />
        <CustomInput
          placeholder={'아이디'}
          value={null}
          onChangeText={null}
          autoComplete={'email'}
          keyboardType={'email-address'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'비밀번호'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.password}>
          <Text style={styles.text2}>비밀번호를 잊으셨습니까?</Text>
        </TouchableOpacity>
        <LoginCustomButton title={'로그인'} onPress={null} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text1: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
  },
  subContainer: {
    width: 330,
  },
  password: {
    width: 330,
    alignItems: 'flex-end',
  },
  text2: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6A707C',
  },
});

export default ManageScreen6;
