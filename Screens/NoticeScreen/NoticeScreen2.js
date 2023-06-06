import React from 'react';
import {View, StyleSheet} from 'react-native';
import Item2 from '../../Components/Item2';

function NoticeScreen2() {
  return (
    <View style={styles.container}>
      <Item2
        one={'2023-05-05'}
        two={'쿠팡'}
        three={'88208301843'}
        four={'수취대기'}
      />
      <Item2
        one={'2023-05-03'}
        two={'쿠팡'}
        three={'66888301843'}
        four={'수취완료'}
      />
      <Item2
        one={'2023-05-01'}
        two={'쿠팡'}
        three={'77808301843'}
        four={'반송완료'}
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

export default NoticeScreen2;
