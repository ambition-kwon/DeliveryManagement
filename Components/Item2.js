import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Item2({one, two, three, four}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>{one}</Text>
      <Text style={styles.text3}>{two}</Text>
      <View style={styles.subContainer1}>
        <Text style={styles.text4}>{three}</Text>
      </View>
      <Text
        style={
          four === '수취완료' || four === '반송완료'
            ? styles.text5
            : styles.text6
        }>
        {four}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 115,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    position: 'absolute',
    left: 11,
    top: 14,
  },
  text3: {
    fontSize: 12,
    fontWeight: '400',
    position: 'absolute',
    left: 11,
  },
  text4: {
    fontSize: 12,
    fontWeight: '400',
  },
  subContainer1: {
    width: 120,
    height: 30,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 11,
    bottom: 10,
  },
  text5: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    position: 'absolute',
    right: 11,
  },
  text6: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
    position: 'absolute',
    right: 11,
  },
});

export default Item2;
