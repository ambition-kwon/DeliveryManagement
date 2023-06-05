import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginCustomButton from '../../Components/LoginCustomButton';

function ManageScreen13() {
  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCaptureButtonPress = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      setCapturedImage(data.uri);
      console.log(data.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>정면을 바라보고</Text>
      <Text style={styles.text}>촬영버튼을 눌러주세요</Text>
      <View style={{height: 50}} />

      {capturedImage ? (
        <Image source={{uri: capturedImage}} style={styles.image} />
      ) : (
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
        />
      )}
      {capturedImage ? (
        <LoginCustomButton title={'완료'} onPress={null} />
      ) : (
        <LoginCustomButton title={'촬영'} onPress={handleCaptureButtonPress} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3E7',
  },
  camera: {
    width: 300,
    height: 300,
    borderWidth: 3,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 3,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});

export default ManageScreen13;
