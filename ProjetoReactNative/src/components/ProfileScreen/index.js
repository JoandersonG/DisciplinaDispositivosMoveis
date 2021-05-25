import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from './styles'

const ProfileScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>

      <Image
            source={require('../../../src/image/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.homeTitle}>Perfil</Text>
    </View>
  );
};
export default ProfileScreen;