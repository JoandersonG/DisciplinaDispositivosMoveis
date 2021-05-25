import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from './styles'

const HomeScreen = ({ navigation }) => {

  const email = navigation.getParam('email')

  return (
    <View style={styles.container}>

      <Text style={styles.homeTitle}>Tela Inicial</Text>
      <Text style={styles.homeWelcome}>Login realizado como: {email}</Text>
    </View>
  );
};
export default HomeScreen;