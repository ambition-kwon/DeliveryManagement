import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectScreen from './SelectScreen';

function RootStack() {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
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
