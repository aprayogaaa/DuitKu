import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import CustomButton from "../Component/CustomButton"
import Footer from "../Component/Footer"
import Header from "../Component/ProfileHeader"

// @ts-ignore
const Profile = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.menuCardContainer}>
          <View style={styles.menuCard}>
            <Text style={styles.menuText}>Change Personal Data</Text>
            <TouchableWithoutFeedback>
              <Image source={require('./../images/next.png')} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.menuCard}>
            <Text style={styles.menuText}>About DuitKu</Text>
            <TouchableWithoutFeedback>
              <Image source={require('./../images/next.png')} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.button}>
            <CustomButton title='Logout' />
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuCardContainer: {
    padding: 30
  },
  menuCard: {
    backgroundColor: '#F2F3F3',
    marginBottom: 20,
    padding: 20,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuText: {
    color: '#366ED8'
  },
  button: {
    marginTop: 50
  }
})