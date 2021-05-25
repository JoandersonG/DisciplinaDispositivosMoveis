//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from 'react-navigation-drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen'
import HomeScreen from '../HomeScreen'

// Main Screens for Drawer Navigator
export const MainStack = StackNavigator({
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Dashboard',
        gesturesEnabled: false,
        headerLeft: null
      }
    },
  
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        title: 'Notifications'
      }
    }
  }, { headerMode: 'screen' } );
  
  // Drawer Navigator
  export const Drawer = DrawerNavigator({
    MainStack: {
      screen: MainStack
    }
  });
  
  
  // Main App Navigation
  export const AppStack = StackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  }, { headerMode: 'none' } );
  
  // In Your App.js
  <AppStack />