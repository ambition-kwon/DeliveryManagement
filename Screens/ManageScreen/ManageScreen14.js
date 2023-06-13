import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../../Components/CustomInput';
import {RNCamera} from 'react-native-camera';
import LoginCustomButton from '../../Components/LoginCustomButton';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../../Contexts/DataContext';
import axios from 'axios';

function ManageScreen14() {
  const [barcodeData, setBarcodeData] = useState(null);
  const navigation = useNavigation();
  const {token, server} = useContext(DataContext);
  const handleBarcodeRead = result => {
    setBarcodeData(result.data);
    console.log(result.data);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text1}>반송하실 택배의 바코드를</Text>
          <Text style={styles.text1}>후면 카메라를 통해 스캔해주세요</Text>
          <View style={{height: 25}} />
          <RNCamera
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            onBarCodeRead={handleBarcodeRead}
            captureAudio={false}
          />
          <View style={{height: 20}} />
          <CustomInput
            value={barcodeData}
            onChangeText={setBarcodeData}
            autoComplete={'off'}
            keyboardType={'number-pad'}
            secureTextEntry={false}
          />
          <LoginCustomButton
            title={'확인'}
            onPress={() => {
              axios
                .post(
                  `${server}/managesys/resident/awaitingReturn/trackingNumber`,
                  {trackingNumber: barcodeData},
                  {
                    headers: {
                      Authorization: token,
                    },
                  },
                )
                .then(response => {
                  navigation.navigate('Manage15');
                })
                .catch(error => {
                  Alert.alert(
                    '알림',
                    '바코드를 확인해주시기 바랍니다',
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3E7',
  },
  text1: {
    fontSize: 22,
    fontWeight: '700',
  },
  camera: {
    width: 300,
    height: 300,
    borderWidth: 3,
  },
});

export default ManageScreen14;
