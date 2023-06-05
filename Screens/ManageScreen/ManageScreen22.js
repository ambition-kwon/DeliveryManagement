import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Item22 from '../../Components/Item22';

function ManageScreen22() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>거주자 정보 관리</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text2}>호실</Text>
        <Text style={styles.text2}>이름</Text>
        <Text style={styles.text2}>주민번호</Text>
      </View>
      <Item22 one={'201'} two={'권혁원'} three={'970426'} />
      <Item22 one={'202'} two={'권혁준'} three={'990815'} />
      <Item22 one={'203'} two={'안예원'} three={'950101'} />
    </View>
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
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 35,
  },
  subContainer: {
    width: 370,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingLeft: 25,
    paddingRight: 20,
  },
  text2: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ManageScreen22;
