import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

// @ts-ignore
const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableWithoutFeedback>
        <Image source={require('./../img/home.png')} width={32} height={32} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image source={require('./../img/add.png')} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image source={require('./../img/profile.png')} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#366ED8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})