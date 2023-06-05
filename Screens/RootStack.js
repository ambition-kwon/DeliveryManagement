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
import ManageScreen10 from './ManageScreen/ManageScreen10';
import ManageScreen11 from './ManageScreen/ManageScreen11';
import ManageScreen12 from './ManageScreen/ManageScreen12';
import ManageScreen13 from './ManageScreen/ManageScreen13';
import ManageScreen14 from './ManageScreen/ManageScreen14';
import ManageScreen15 from './ManageScreen/ManageScreen15';
import ManageScreen16 from './ManageScreen/ManageScreen16';
import ManageScreen17 from './ManageScreen/ManageScreen17';
import ManageScreen18 from './ManageScreen/ManageScreen18';
import ManageScreen19 from './ManageScreen/ManageScreen19';
import ManageScreen20 from './ManageScreen/ManageScreen20';
import ManageScreen21 from './ManageScreen/ManageScreen21';
import ManageScreen22 from './ManageScreen/ManageScreen22';

function RootStack() {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name={'Manage22'}
        component={ManageScreen22}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage9'}
        component={ManageScreen9}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage21'}
        component={ManageScreen21}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage20'}
        component={ManageScreen20}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage19'}
        component={ManageScreen19}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#FEF3E7',
          },
        }}
      />
      <stack.Screen
        name={'Manage18'}
        component={ManageScreen18}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage17'}
        component={ManageScreen17}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage16'}
        component={ManageScreen16}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage15'}
        component={ManageScreen15}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage14'}
        component={ManageScreen14}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage13'}
        component={ManageScreen13}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage12'}
        component={ManageScreen12}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage11'}
        component={ManageScreen11}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Manage10'}
        component={ManageScreen10}
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
