import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    texto1:{
      color: '#f8f8ff',
      fontSize: 24,
      padding: 30
    },
    texto2: {
      color: '#fffaf0',
      fontSize: 16,
      padding: 30
    },
    texto3:{
      color: '#f0ffff',
      fontSize: 18,
      textAlign: 'center',
      letterSpacing: 2,
      padding: 30,
      backgroundColor: '#000000',
    },

    texto4:{
      color: '#800000',
      fontSize: 12,
      textAlign: 'center',
      letterSpacing: 2,
    },

    button: {
      width: 300,
      height: 42,
      backgroundColor: '#5599ff',
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   
    },

    logo: {
      width: 150,
      height: 150,
      borderRadius: 80,
      marginBottom: 15
    },

    input:{
      marginTop: 10,
      padding: 10,
      width: 300,
      backgroundColor: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3,
    },

    buttonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },

    bottomText: {
      marginTop: 20,
      fontWeight: '500'
    },

    bottomTextClickable: {
      marginTop: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

    loginFieldsContainer: {
      backgroundColor: 'rgba(200, 200, 200, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      borderRadius: 20
    }
  });

  //make this component available to the app
  export default styles ;