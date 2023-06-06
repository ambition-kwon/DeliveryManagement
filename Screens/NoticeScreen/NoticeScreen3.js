import React from 'react';
import {View, StyleSheet} from 'react-native';
import Item3 from '../../Components/Item3';

function NoticeScreen3() {
  return (
    <View style={styles.container}>
      <Item3
        one={'수취처리가 완료되었습니다.'}
        two={'쿠팡'}
        three={'88208301843'}
        four={'2023-06-06'}
        five={'10:54'}
      />
      <Item3
        one={'반송처리가 완료되었습니다.'}
        two={'CJ'}
        three={'66208301843'}
        four={'2023-06-04'}
        five={'07:54'}
      />
      <Item3
        one={'대리인이 안면사진을 확인하였습니다.'}
        two={'확인사유'}
        three={'2023-05-31일 분실건에 대한 조사'}
        four={'2023-06-02'}
        five={'18:54'}
      />
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
});

export default NoticeScreen3;
