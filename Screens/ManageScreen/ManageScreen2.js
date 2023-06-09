import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ManageScreen2() {
  const navigation = useNavigation();
  const [Admin, setAdmin] = useState({
    id: '',
    password: '',
    residence: '',
    zipcode: '',
  });
  const [passwordConfirm, setPasswordConfirm] = useState('');
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{height: 96}} />
        <View style={styles.subContainer}>
          <Text style={styles.text1}>관리시스템</Text>
          <Text style={styles.text1}>회원가입</Text>
        </View>
        <View style={{height: 44}} />
        <CustomInput
          placeholder={'아이디'}
          value={Admin.id}
          onChangeText={text => setAdmin({...Admin, id: text})}
          autoComplete={'email'}
          keyboardType={'email-address'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'비밀번호'}
          value={Admin.password}
          onChangeText={text => setAdmin({...Admin, password: text})}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={'비밀번호 재확인'}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={'거주지명(예. 제주대학교 기숙사 4호관)'}
          value={Admin.residence}
          onChangeText={text => setAdmin({...Admin, residence: text})}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'거주지 우편번호(예. 63243)'}
          value={Admin.zipcode}
          onChangeText={text => setAdmin({...Admin, zipcode: text})}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
        />
        <LoginCustomButton
          title={'회원가입'}
          onPress={() => {
            if (Admin.password !== passwordConfirm) {
              Alert.alert(
                '알림',
                '비밀번호를 재확인해 주세요',
                [
                  {
                    text: '확인',
                    style: 'default',
                    onPress: () => {},
                  },
                ],
                {cancelable: true},
              );
            } else {
              axios
                .post('http://172.20.16.116:8080/managesys/adminJoin', Admin)
                .then(response => {
                  Alert.alert(
                    '알림',
                    '회원가입에 성공하였습니다',
                    [
                      {
                        text: '확인',
                        style: 'default',
                        onPress: () => {
                          navigation.pop();
                        },
                      },
                    ],
                    {cancelable: true},
                  );
                })
                .catch(error => {
                  Alert.alert(
                    '알림',
                    '회원가입에 실패하였습니다',
                    [
                      {
                        text: '확인',
                        style: 'default',
                        onPress: () => {},
                      },
                    ],
                    {cancelable: true},
                  );
                });
            }
          }}
        />
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

export default ManageScreen2;
