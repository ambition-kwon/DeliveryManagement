import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectScreen from './SelectScreen';
import NoticeScreen1 from './NoticeScreen/NoticeScreen1';
import ManageScreen1 from './ManageScreen/ManageScreen1';
import ManageScreen2 from './ManageScreen/ManageScreen2';
import ManageScreen3 from './ManageScreen/ManageScreen3';
import ManageScreen4 from './ManageScreen/ManageScreen4';
import ManageScreen5 from './ManageScreen/ManageScreen5';
import ManageScreen6 from './ManageScreen/ManageScreen6';
import ManageScreen7 from './ManageScreen/ManageScreen7';
import ManageScreen8 from './ManageScreen/ManageScreen8';
import ManageScreen9 from './ManageScreen/ManageScreen9';

function RootStack() {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name={'Manage9'}
        component={ManageScreen9}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage8'}
        component={ManageScreen8}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage7'}
        component={ManageScreen7}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage6'}
        component={ManageScreen6}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage5'}
        component={ManageScreen5}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage4'}
        component={ManageScreen4}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage3'}
        component={ManageScreen3}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage2'}
        component={ManageScreen2}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage1'}
        component={ManageScreen1}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Notice1'}
        component={NoticeScreen1}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Select'}
        component={SelectScreen}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
}

export default RootStack;
