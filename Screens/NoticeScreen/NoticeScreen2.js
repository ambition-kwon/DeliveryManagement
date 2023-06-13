import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Item2 from '../../Components/Item2';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function NoticeScreen2() {
  const {token, Resident, server} = useContext(DataContext);
  const [data, setData] = useState([]);
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    axios
      .post(`${server}/notifsys/home`, Resident, {
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
  list: {flex: 1},
});

export default NoticeScreen2;
