//import liraries
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'; 
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './src/components/HomeScreen';
import Profile from './src/components/ProfileScreen';

const MainDrawer = createDrawerNavigator(
  {
  Home: Home,
  Profile: Profile,
},
{
  //Prop 
  contentOptions: {
    //Sempre que a aba estiver ativa, manter essa cor
    activeTintColor: `#800000`,
    //Prop
    //Permite aumentar a fonte 
    labelStyle: {
      fontSize: 18
    }
  }
}
)

//make this component available to the app
//export the component of our drawer
export default createAppContainer(MainDrawer);






