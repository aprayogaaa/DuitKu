import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./../img/Logo.png')} style={styles.image} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
})