import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '../HomeScreen/HomeScreen';
import { WalletScreen } from '../WalletScreen/WalletScreen';
import { ScheduleScreen } from '../ScheduleScreen/ScheduleScreen';
import { PaymentScreen } from '../PaymentScreen/PaymentScreen';
import { TicketSuccessScreen } from '../TicketSuccessScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlaceholderScreen = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }} />
);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="TicketSuccess" component={TicketSuccessScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#2d2d2d',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarActiveTintColor: '#35A2C1',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? 'wallet' : 'wallet-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};