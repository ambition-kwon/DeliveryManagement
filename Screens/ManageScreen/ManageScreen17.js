import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomInput from '../../Components/CustomInput';
import LoginCustomButton from '../../Components/LoginCustomButton';
import {useNavigation} from '@react-navigation/native';

function ManageScreen17() {
  const navigation = useNavigation();
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
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <View style={{height: 30}} />
        <CustomInput
          placeholder={'호실(예. 201)'}
          value={null}
          onChangeText={null}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
        />
        <LoginCustomButton
          title={'등록'}
          onPress={() => {
            navigation.navigate('Manage18');
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
