import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoticeScreen2 from './NoticeScreen/NoticeScreen2';
import NoticeScreen3 from './NoticeScreen/NoticeScreen3';
import NoticeScreen4 from './NoticeScreen/NoticeScreen4';

const tab = createBottomTabNavigator();
function MainTab() {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6E68',
        headerStyle: {backgroundColor: '#FEF3E7'},
        tabBarStyle: {backgroundColor: '#FEF3E7'},
      }}>
      <tab.Screen
        name={'Notice2'}
        component={NoticeScreen2}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} size={25} color={color} />
          ),
          title: '홈',
        }}
      />
      <tab.Screen
        name={'Notice3'}
        component={NoticeScreen3}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'notifications'} size={25} color={color} />
          ),
          title: '알림',
        }}
      />
      <tab.Screen
        name={'Notice4'}
        component={NoticeScreen4}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'person'} size={25} color={color} />
          ),
          title: '내 정보',
        }}
      />
    </tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default MainTab;
