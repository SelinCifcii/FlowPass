import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './screens/Navigator/AppNavigator';
import { WalletProvider } from './context/WalletContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <WalletProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </WalletProvider>
    </SafeAreaProvider>
  );
}
