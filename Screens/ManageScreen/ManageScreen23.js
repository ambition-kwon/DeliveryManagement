import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import {useNavigation} from '@react-navigation/native';

function ManageScreen23() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
        <View style={styles.container}>
          <CustomInput
            placeholder={'거주자명(예. 홍길동)'}
            value={null}
            onChangeText={null}
            autoComplete={'off'}
            keyboardType={'default'}
            secureTextEntry={false}
          />
          <View style={{height: 20}} />
          <CustomInput
            placeholder={'호실(예. 201)'}
            value={null}
            onChangeText={null}
            autoComplete={'off'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
          />
          <View style={{height: 20}} />
          <CustomInput
            placeholder={'주민번호 앞자리(예. 970426)'}
            value={null}
            onChangeText={null}
            autoComplete={'off'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
          />
          <LoginCustomButton
            title={'등록완료'}
            onPress={() => {
              navigation.pop();
            }}
          />
          <View style={{height: 50}} />
        </View>
      </KeyboardAvoidingView>
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
});

export default ManageScreen23;
