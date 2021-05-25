import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles'

const RegisterScreen = ({ navigation }) => {

  const [dataNasc, setDataNasc] = useState()
  const [phoneNumber, setPhoneNumber] = useState()


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
            placeholder="Informe seu nome completo"
          />

          <TextInputMask
            style={styles.input}
            placeholder="Data de nascimento"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={dataNasc}
            onChangeText={text => setDataNasc(text)}
          />

          <TextInputMask
            style={styles.input}
            placeholder="Celular"
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
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

          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button} onPress={() => {
              console.info('Conta criada com sucesso');
            }}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>Já possui conta?{' '}
            <TouchableOpacity>


              <Text
                style={styles.bottomTextClickable}
                onPress={() => {
                  navigation.pop()
                }}
              >Entre</Text>
            </TouchableOpacity>
          </Text>

        </View>

      </ImageBackground>

    </View>
  );
};
export default RegisterScreen;