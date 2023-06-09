import React, {useContext, useState} from 'react';
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
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function ManageScreen23() {
  const navigation = useNavigation();
  const {token} = useContext(DataContext);
  const [Resident, setResident] = useState({
    name: '',
    address: '',
    birth: '',
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
        <View style={styles.container}>
          <CustomInput
            placeholder={'거주자명(예. 홍길동)'}
            value={Resident.name}
            onChangeText={text => setResident({...Resident, name: text})}
            autoComplete={'off'}
            keyboardType={'default'}
            secureTextEntry={false}
          />
          <View style={{height: 20}} />
          <CustomInput
            placeholder={'호실(예. 201)'}
            value={Resident.address}
            onChangeText={text => setResident({...Resident, address: text})}
            autoComplete={'off'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
          />
          <View style={{height: 20}} />
          <CustomInput
            placeholder={'주민번호 앞자리(예. 970426)'}
            value={Resident.birth}
            onChangeText={text => setResident({...Resident, birth: text})}
            autoComplete={'off'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
          />
          <LoginCustomButton
            title={'등록완료'}
            onPress={() => {
              axios
                .post(
                  'http://172.20.16.116:8080/managesys/admin/resident/create',
                  Resident,
                  {
                    headers: {
                      Authorization: token,
                    },
                  },
                )
                .then(response => {
                  console.log('추가완료');
                  navigation.pop();
                })
                .catch(error => {
                  console.error('에러:', error);
                });
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
