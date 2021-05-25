import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
      fontSize: 34
    }

  });

  //make this component available to the app
  export default styles ;