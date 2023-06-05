import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../../Components/CustomInput';
import {RNCamera} from 'react-native-camera';
import LoginCustomButton from '../../Components/LoginCustomButton';

function ManageScreen11() {
  const [barcodeData, setBarcodeData] = useState(null);

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
          <Text style={styles.text1}>수취하실 택배의 바코드를</Text>
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
          <LoginCustomButton title={'확인'} onPress={null} />
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

export default ManageScreen11;
