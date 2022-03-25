import React from 'react'
import { Image, Text, TouchableWithoutFeedback, StyleSheet, View, Platform, StatusBar } from "react-native"
import Footer from "../Component/Footer"

// @ts-ignore
const About = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./../images/back.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.headerText}>About DuitKu</Text>
        </View>
        <Text>
          DuitKu is a mobile application that assists users with financial management. Every day, users can create transactions by entering financial revenue and spending. Additionally, users could view transaction history.
        </Text>
      </View>
      <Footer navigation={navigation} />
    </>
  )
} 

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android'
                ? typeof StatusBar.currentHeight === 'number'
                  ? StatusBar.currentHeight + 20
                  : 0 
                : 0
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  headerText: {
    fontSize: 22,
    marginLeft: 70
  }
})