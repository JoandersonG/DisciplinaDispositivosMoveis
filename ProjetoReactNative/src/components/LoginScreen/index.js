import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from './styles'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LoginScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../../src/image/background_login.png')}
        style={[styles.background, styles.container]}>

        <View style={styles.loginFieldsContainer}>

          <Image
            source={require('../../../src/image/logo.png')}
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            placeholder="Informe seu e-mail"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button} onPress={() => {
              console.info('Iniciando a aplicação...')
            }}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>Ainda não possui conta? {' '}
            <TouchableOpacity>
              <Text style={styles.bottomTextClickable} onPress={() => {
                navigation.navigate('Registre-se')
              }
              }>Registre-se</Text>
            </TouchableOpacity>
          </Text>

        </View>

      </ImageBackground>

    </View>
  );
};
export default LoginScreen;