import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Item24 from '../../Components/Item24';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ManageScreen24() {
  // 이걸로 modal과 연동시키기
  const [selectedItem, setSelectedItem] = useState(null);
  ///////////////////////
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{height: 20}} />
      <Item24
        one={'권혁원'}
        two={'2023-05-05'}
        three={'쿠팡'}
        four={'88208301843'}
        five={'수취대기'}
        onPress={handleOpenModal}
      />
      <Item24
        one={'권혁준'}
        two={'2023-05-03'}
        three={'CJ'}
        four={'77208301843'}
        five={'수취완료'}
        onPress={handleOpenModal}
      />
      <Item24
        one={'안예원'}
        two={'2023-05-01'}
        three={'우체국'}
        four={'66208301843'}
        five={'반송완료'}
        onPress={handleOpenModal}
      />
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
                onPress={null}>
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
});

export default ManageScreen24;
