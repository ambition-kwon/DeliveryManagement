import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Item3 from '../../Components/Item3';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function NoticeScreen3() {
  const {token, Resident} = useContext(DataContext);
  const [data, setData] = useState([]);
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    axios
      .post('http://172.20.16.116:8080/notifsys/home/history', Resident, {
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
    const sortedData = data.sort(
      (a, b) => new Date(b.localDateTime) - new Date(a.localDateTime),
    );
    setArrayData(sortedData);
  }, [data]);

  const renderItem = ({item}) => {
    return (
      <Item3
        one={item.status}
        two={item.company}
        three={item.trackingNumber}
        four={item.localDateTime.slice(0, 10)}
        five={item.localDateTime.slice(11, 16)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={arrayData} renderItem={renderItem} style={styles.list} />
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
  list: {
    flex: 1,
  },
});

export default NoticeScreen3;
