import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

function Item24({one, two, three, four, five, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{one}</Text>
      <Text style={styles.text2}>{two}</Text>
      <Text style={styles.text3}>{three}</Text>
      <View style={styles.subContainer1}>
        <Text style={styles.text4}>{four}</Text>
      </View>
      <Text
        style={
          five === '수취완료' || five === '반송완료'
            ? styles.text5
            : styles.text6
        }>
        {five}
      </Text>
      <TouchableOpacity
        style={styles.subContainer2}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={styles.text7}>안면사진확인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 115,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  text1: {
    fontSize: 18,
    fontWeight: '500',
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    position: 'absolute',
    left: 11,
    top: 14,
  },
  text3: {
    fontSize: 12,
    fontWeight: '400',
    position: 'absolute',
    left: 11,
  },
  text4: {
    fontSize: 12,
    fontWeight: '400',
  },
  subContainer1: {
    width: 100,
    height: 30,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 11,
    bottom: 10,
  },
  text5: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    position: 'absolute',
    right: 11,
    top: 14,
  },
  text6: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
    position: 'absolute',
    right: 11,
    top: 14,
  },
  subContainer2: {
    width: 83,
    height: 30,
    backgroundColor: '#FF6D6D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 11,
    bottom: 10,
  },
  text7: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
});

export default Item24;
