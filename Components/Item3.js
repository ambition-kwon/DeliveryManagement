import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Item3({one, two, three, four, five}) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Icon name={'directions-car'} size={25} color={'black'} />
      </View>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>{one}</Text>
        <Text style={styles.text2}>{`${two} / ${three}`}</Text>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.text3}>{four}</Text>
        <Text style={styles.text3}>{five}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 14,
    fontWeight: '600',
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
  },
  text3: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
  },
  subContainer1: {
    flex: 1,
    paddingLeft: 16,
  },
  subContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Item3;
