import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function ManageScreen17({route}) {
  const navigation = useNavigation();
  const {barcodeData} = route.params ? route.params : null;
  const {token} = useContext(DataContext);
  const [data, setData] = useState({
    trackingNumber: barcodeData,
    name: '',
    address: '',
  });
  const handleNameChange = text => {
    setData(prevData => ({
      ...prevData,
      name: text,
    }));
  };

  const handleAddressChange = text => {
    setData(prevData => ({
      ...prevData,
      address: text,
    }));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text1}>등록하실 택배의</Text>
        <Text style={styles.text1}>수취인 이름과 호실을 입력해주세요</Text>
        <View style={{height: 80}} />
        <CustomInput
          placeholder={'이름(예. 홍길동)'}
          value={data.name}
          onChangeText={handleNameChange}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <View style={{height: 30}} />
        <CustomInput
          placeholder={'호실(예. 201)'}
          value={data.address}
          onChangeText={handleAddressChange}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
        />
        <LoginCustomButton
          title={'등록'}
          onPress={() => {
            axios
              .post(
                'http://172.20.16.116:8080/managesys/deliverer/parcel/registration',
                data,
                {
                  headers: {
                    Authorization: token,
                  },
                },
              )
              .then(response => {
                navigation.navigate('Manage18');
              })
              .catch(error => {
                console.error('에러:', error);
              });
          }}
        />
        <View style={{height: 40}} />
      </SafeAreaView>
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

export default ManageScreen17;
