import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Splash from './src/screens/Splash';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Stores from './src/screens/Stores';
import Categories from './src/screens/Categories';
import Rewards from './src/screens/Rewards';
import Profile from './src/screens/Profile';

const Tabs = AnimatedTabBarNavigator();
const BottomTab = () => {
  return (
    <Tabs.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#222222',
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="store"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="braille"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="money-bill-wave"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Main" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
