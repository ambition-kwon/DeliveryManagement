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

function ManageScreen5() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{height: 96}} />
        <View style={styles.subContainer}>
          <Text style={styles.text1}>배달인</Text>
          <Text style={styles.text1}>로그인</Text>
        </View>
        <View style={{height: 44}} />
        <CustomInput
          placeholder={'이름(예. 홍길동)'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'택배사(예. 쿠팡, CJ, 우체국)'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'사번(예. 8739284)'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={true}
        />
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

export default ManageScreen5;
