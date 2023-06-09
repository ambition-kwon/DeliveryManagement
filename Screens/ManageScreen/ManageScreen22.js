import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Item22 from '../../Components/Item22';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../../Contexts/DataContext';
import axios from 'axios';

function ManageScreen22() {
  useEffect(() => {
    axios
      .post('http://172.20.16.116:8080/managesys/admin/resident/showAll', {
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
  useEffect(() => {
    axios
      .post('http://172.20.16.116:8080/managesys/admin/resident/showAll', {
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
  }, [navigation]);
  const navigation = useNavigation();
  const [data, setData] = useState();
  const {token} = useContext(DataContext);
  const renderItem = ({item}) => {
    return (
      <Item22
        one={item.address}
        two={item.name}
        three={item.birth}
        onPress={() => {
          Alert.alert(
            '알림',
            '해당 거주인을 삭제하시겠습니까?',
            [
              {
                text: '취소',
                style: 'cancel',
                onPress: () => {},
              },
              {
                text: '삭제',
                style: 'destructive',
                onPress: () => {
                  axios
                    .post(
                      'http://172.20.16.116:8080/managesys/admin/resident/delete',
                      item,
                      {
                        headers: {
                          Authorization: token,
                        },
                      },
                    )
                    .then(response => {
                      console.log('삭제완료');
                      axios
                        .post(
                          'http://172.20.16.116:8080/managesys/admin/resident/showAll',
                          {
                            headers: {
                              Authorization: token,
                            },
                          },
                        )
                        .then(response => {
                          setData(response.data);
                        })
                        .catch(error => {
                          console.error('에러:', error);
                        });
                    })
                    .catch(error => {
                      console.error('에러:', error);
                    });
                },
              },
            ],
            {cancelable: true},
          );
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: 20}} />
      <View style={styles.subContainer}>
        <Text style={styles.text2}>호실</Text>
        <Text style={styles.text2}>이름</Text>
        <Text style={styles.text2}>생년월일</Text>
      </View>
      <FlatList data={data} renderItem={renderItem} style={styles.list} />
      <TouchableOpacity
        style={styles.add}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Manage23');
        }}>
        <Icon name={'add'} size={40} color={'white'} />
      </TouchableOpacity>
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
  add: {
    width: 56,
    height: 56,
    backgroundColor: '#C02541',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    bottom: 50,
  },
  list: {
    flex: 1,
  },
});

export default ManageScreen22;
