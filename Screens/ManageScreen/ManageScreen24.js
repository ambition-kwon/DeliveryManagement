import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Item24 from '../../Components/Item24';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DataContext from '../../Contexts/DataContext';

function ManageScreen24() {
  useEffect(() => {
    axios
      .post(`${server}/managesys/admin/parcel/showAll`, {
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
  const {token, setSelectedItem, server} = useContext(DataContext);
  const [data, setData] = useState();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const renderItem = ({item}) => {
    return (
      <Item24
        one={item.residentName}
        two={item.localDateTime.slice(0, 10)}
        three={item.company}
        four={item.trackingNumber}
        five={item.status}
        onPress={() => {
          handleOpenModal();
          setSelectedItem(item.trackingNumber);
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height: 20}} />
      <FlatList data={data} renderItem={renderItem} style={styles.list} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={null}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modal1}>
              <Image source={require('../../assets/Vector.png')} />
              <TouchableOpacity
                style={styles.close}
                activeOpacity={0.7}
                onPress={() => {
                  handleCloseModal();
                }}>
                <Icon name={'close'} size={25} color={'gray'} />
              </TouchableOpacity>
            </View>
            <View style={styles.modal2}>
              <Text style={styles.text3}>안면사진을</Text>
              <Text style={styles.text3}>확인하시겠습니까?</Text>
              <Text style={styles.text4}>안면사진 확인 시</Text>
              <Text style={styles.text4}>
                사용자 본인에게 알림이 전송됩니다
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.accept}
                onPress={() => {
                  navigation.navigate('Manage25');
                  handleCloseModal();
                }}>
                <Text style={styles.text5}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFE4C7',
    height: 346,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  modal1: {
    height: 226,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal2: {
    height: 120,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  close: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: 24,
  },
  text3: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
  },
  text4: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray',
  },
  accept: {
    width: 98,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  text5: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
  list: {
    flex: 1,
  },
});

export default ManageScreen24;
