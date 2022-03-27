import React from 'react'
import { View, StyleSheet, Platform, StatusBar, TouchableWithoutFeedback, Image, Text, TextInput } from 'react-native'
import CustomButton from '../Component/CustomButton'
import Footer from './../Component/Footer'

// @ts-ignore
const PersonalData = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./../img/back.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.headerText}>Change Personal Data</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <Text style={styles.text}>
          To update your personal information, please enter your password!
        </Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.button}>
          <CustomButton title='Submit' />
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

export default PersonalData

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
    marginBottom: 10
  },
  headerText: {
    fontSize: 22,
    marginLeft: 20
  },
  inputGroup: {
    marginTop: 30
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 30
  },
  text: {
    marginTop: 25,
    color: 'gray'
  },
  button: {
    marginTop: 50
  }
})