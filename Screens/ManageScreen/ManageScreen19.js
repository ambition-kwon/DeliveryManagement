import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Item19 from '../../Components/Item19';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../../Contexts/DataContext';
import axios from 'axios';

function ManageScreen19() {
  useEffect(() => {
    axios
      .post(
        'http://172.20.16.116:8080/managesys/deliverer/parcel/awaitingReturnList',
        Deliverer,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        if (response.data[0] === '반송 수거 대상 택배가 없습니다.') {
          setCheck(false);
        } else {
          setCheck(true);
          setData(response.data);
        }
      })
      .catch(error => {
        console.error('에러:', error);
      });
  }, []);
  const navigation = useNavigation();
  const {Deliverer, token} = useContext(DataContext);
  const [data, setData] = useState();
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>수거하실 택배를 선택해주세요</Text>
      {!check ? null : (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <Item19
                one={item.localDateTime.slice(0, 10)}
                two={item.trackingNumber}
                three={item.status}
                onPress={() => {
                  navigation.navigate('Manage20', {item});
                }}
              />
            );
          }}
          style={styles.list}
        />
      )}
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
  list: {
    flex: 1,
  },
});

export default ManageScreen19;
