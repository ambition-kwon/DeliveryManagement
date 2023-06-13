import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function ShowFace() {
  useEffect(() => {
    axios
      .post(
        `${server}/managesys/admin/parcel/showAll/image`,
        {trackingNumber: selectedItem},
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(response => {
        setData(response.data.path);
      })
      .catch(error => {
        console.error('에러:', error);
      });
  }, []);
  const {token, server} = useContext(DataContext);
  const {selectedItem} = useContext(DataContext);
  const [data, setData] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: data}} style={styles.image} />
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 100,
  },
});
export default ShowFace;
