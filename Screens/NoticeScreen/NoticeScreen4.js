import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../../Contexts/DataContext';
import axios from 'axios';

function NoticeScreen4() {
  useEffect(() => {
    axios
      .post('http://172.20.16.116:8080/notifsys/home/myInfo', Resident, {
        headers: {
          Authorization: token,
        },
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('에러:', error);
      });
  }, []);
  const navigation = useNavigation();
  const {setToken, Resident, token, setResident} = useContext(DataContext);
  const [data, setData] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.subBox1}>
          <View style={styles.profile}>
            <Icon name={'person'} size={30} color={'white'} />
          </View>
          <View>
            <Text style={styles.text1}>{Resident.name}</Text>
            <Text style={styles.text2}>{Resident.address}</Text>
          </View>
        </View>
        <View style={styles.subBox2}>
          <View style={styles.subBox3}>
            <Text style={styles.text3}>{data ? data['수취 대기'] : null}</Text>
            <Text style={styles.text5}>수취 대기</Text>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text4}>{data ? data['수취 완료'] : null}</Text>
            <Text style={styles.text5}>수취 완료</Text>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text3}>{data ? data['반송 대기'] : null}</Text>
            <Text style={styles.text5}>반송 대기</Text>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text4}>{data ? data['반송 완료'] : null}</Text>
            <Text style={styles.text5}>반송 완료</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.logout}
        onPress={() => {
          setToken('');
          setResident({
            name: '',
            address: '',
            birth: '',
            zipcode: '',
          });
          navigation.reset({routes: [{name: 'Select'}]});
        }}>
        <Text style={styles.text6}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEF3E7',
  },
  box: {
    marginTop: 40,
    width: 360,
    height: 166,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 12,
  },
  subBox1: {
    width: 336,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subBox2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  subBox3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  text1: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  text2: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 13,
  },
  text3: {
    fontSize: 32,
    fontWeight: '500',
    color: 'red',
  },
  text4: {
    fontSize: 32,
    fontWeight: '500',
    color: 'blue',
  },
  text5: {
    fontSize: 12,
    fontWeight: '700',
    color: '#828282',
  },
  text6: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  logout: {
    width: 260,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(12, 13, 16, 0.63)',
    position: 'absolute',
    bottom: 33,
  },
});

export default NoticeScreen4;
