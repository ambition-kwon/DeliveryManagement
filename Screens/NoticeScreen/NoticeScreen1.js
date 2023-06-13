import React, {useContext, useState} from 'react';
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
import DataContext from '../../Contexts/DataContext';
import axios from 'axios';

function NoticeScreen1() {
  const navigation = useNavigation();
  const {setToken, Resident, setResident, server} = useContext(DataContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={{height: 96}} />
        <View style={styles.subContainer}>
          <Text style={styles.text1}>알림시스템</Text>
          <Text style={styles.text1}>로그인</Text>
        </View>
        <View style={{height: 44}} />
        <CustomInput
          placeholder={'이름(예. 홍길동)'}
          value={Resident.name}
          onChangeText={text => setResident({...Resident, name: text})}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'주민등록번호 앞 6자리(예. 970426)'}
          value={Resident.birth}
          onChangeText={text => setResident({...Resident, birth: text})}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder={'거주 호실(예. 101동102호)'}
          value={Resident.address}
          onChangeText={text => setResident({...Resident, address: text})}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder={'거주지 우편번호(예. 63243)'}
          value={Resident.zipcode}
          onChangeText={text => setResident({...Resident, zipcode: text})}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
        />
        <LoginCustomButton
          title={'로그인'}
          onPress={() => {
            axios
              .post(`${server}/notifsys/login`, Resident)
              .then(response => {
                const val = response.data.accessToken;
                setToken(`Bearer ${val}`);
                navigation.reset({routes: [{name: 'MainTab'}]});
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
});

export default NoticeScreen1;
