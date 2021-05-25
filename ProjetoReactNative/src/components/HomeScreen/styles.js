import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      backgroundColor: '#ccaaff'
    },
    

    logo: {
      width: 150,
      height: 150,
      borderRadius: 80,
      marginBottom: 15
    },

    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute' //not push other components underneath it
    },

    homeTitle: {
      color: 'black',
      fontSize: 34,
      marginTop: 26,
    },

    homeWelcome: {
      color: 'black',
      fontSize: 20,
      marginTop: 20,
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

  });

  //make this component available to the app
  export default styles ;