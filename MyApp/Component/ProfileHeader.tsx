import React from 'react'
import { Text, StyleSheet, View, Platform, StatusBar } from "react-native"

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

      </View>
      <Text style={styles.name}>Sisca Kohl</Text>
      <Text style={styles.email}>sisca.kohl@gmail.com</Text>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#366ED8',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    paddingBottom: 80,
    elevation: 10,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android'
                ? typeof StatusBar.currentHeight === 'number'
                  ? StatusBar.currentHeight + 20 
                  : 0 
                : 0
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
  email: {
    color: 'white',
    marginTop: 10
  },
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 100,
    marginBottom: 20
  }
})