import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Item19 from '../../Components/Item19';
import {useNavigation} from '@react-navigation/native';

function ManageScreen19() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>수거하실 택배를 선택해주세요</Text>
      <Item19
        one={'2023-05-05'}
        two={'8932684927'}
        three={'수거대기'}
        onPress={() => {
          navigation.navigate('Manage20');
        }}
      />
      <Item19 one={'2023-05-03'} two={'7732684927'} three={'수거완료'} />
      <Item19 one={'2023-05-01'} two={'1132684927'} three={'수거완료'} />
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
});

export default ManageScreen19;
