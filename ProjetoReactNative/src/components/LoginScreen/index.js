import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from './styles'

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState() 

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
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button} onPress={() => {
              navigation.navigate('Home', {'email' : email})
            }}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>Ainda não possui conta? {' '}
            <TouchableOpacity>
              <Text style={styles.bottomTextClickable} onPress={() => {
                navigation.navigate('Register')
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