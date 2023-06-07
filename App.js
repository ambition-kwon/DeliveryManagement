import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Screens/RootStack';
import {DataContextProvider} from './Contexts/DataContext';
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <DataContextProvider>
          <RootStack />
        </DataContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
