//import liraries
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity , Alert, ImageBackground} from 'react-native';
import styles from './src/styles/ManipulandoStyles';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen'
import RegisterScreen from './src/components/RegisterScreen'

const Stack = createStackNavigator();

// create a component
class App extends Component {

  pressed = () => {
    Alert.alert("Aprendendo manipular elementos visuais com React native.", "Pode acessar a aplicação.")

  }

  sendSignUp = () => {
      console.warn("Entrando em registrar-se...");
  }
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registre-se"
            component={RegisterScreen}
          />  
        </Stack.Navigator>
      </NavigationContainer>     
    );
  };
}

//make this component available to the app
export default App;






