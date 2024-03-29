import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors, fonts } from '../styles/Styles';

export default class Home extends React.Component {
  static navigatorStyle= {
    largeTitle: true,
    navBarNoBorder: true,
    //navBarButtonFontSize: 13, // Change font size nav bar buttons (eg. the back button) (remembered across pushes)
    //navBarButtonFontWeight: '400',
  }
  constructor() {
    super();
  }

  render(){
    return(
      <View style={s.container}>
            <View style={s.containermessage}>
              <Text style={s.nohousetext}> No has rentado casa aún </Text>
              <Text style={s.nohousesubtext}> para comenzar busca nuestras casas disponibles en la sección "Buscar" </Text>
            </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containermessage: {
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    nohousetext: {
      fontFamily: fonts.hsfont,
      fontSize: 18,
      fontWeight: "800",
      color: colors.semiblack
    },
    nohousesubtext: {
      marginTop: 3,
      textAlign: 'center',
      fontFamily: fonts.hsfont,
      fontSize: 12,
      fontWeight: "600",
      color: colors.grayintense
    }
});
