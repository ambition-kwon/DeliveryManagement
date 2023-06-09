import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Item2 from '../../Components/Item2';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function NoticeScreen2() {
  useEffect(() => {
    axios
      .post('http://172.20.16.116:8080/notifsys/home', Resident, {
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
  const {token, Resident} = useContext(DataContext);
  const [data, setData] = useState();
  const renderItem = ({item}) => {
    return (
      <Item2
        one={item.localDateTime.slice(0, 10)}
        two={item.company}
        three={item.trackingNumber}
        four={item.status}
      />
    );
  };
  ////////////////////////////////////////
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} style={styles.list} />
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
  list: {flex: 1},
});

export default NoticeScreen2;
