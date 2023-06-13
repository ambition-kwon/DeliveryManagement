import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import RegisterCustomButton from '../../Components/RegisterCustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function ManageScreen1() {
  const navigation = useNavigation();
  const [Admin, setAdmin] = useState({
    id: '',
    password: '',
  });
  const {server} = useContext(DataContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{height: 96}} />
        <View style={styles.subContainer}>
          <Text style={styles.text1}>관리시스템</Text>
          <Text style={styles.text1}>로그인</Text>
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
        <TouchableOpacity activeOpacity={0.7} style={styles.password}>
          <Text style={styles.text2}>비밀번호를 잊으셨습니까?</Text>
        </TouchableOpacity>
        <LoginCustomButton
          title={'로그인'}
          onPress={() => {
            axios
              .post(`${server}/managesys/firstlogin`, Admin)
              .then(response => {
                navigation.reset({routes: [{name: 'Manage3'}]});
              })
              .catch(error => {
                Alert.alert(
                  '알림',
                  '로그인에 실패하였습니다',
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
          }}
        />
        <View style={{height: 15}} />
        <RegisterCustomButton
          title={'회원가입'}
          onPress={() => {
            navigation.navigate('Manage2');
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

export default ManageScreen1;
