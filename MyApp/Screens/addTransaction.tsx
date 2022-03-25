import React, { useState } from 'react'
import { View, StyleSheet, Platform, StatusBar, Text, TouchableWithoutFeedback, TextInput, Image } from "react-native"
import CustomButton from './../Component/CustomButton'
import Footer from "../Component/Footer"

// @ts-ignore
const AddTransaction = ({ navigation }) => {
  const [currentSelection, setCurrentSelection] = useState('income')

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Add Transaction</Text>
        <View style={styles.headerButtonContainer}>
          <TouchableWithoutFeedback onPress={() => setCurrentSelection('income')}>
            <View>
              <Text style={[styles.headerButton, {backgroundColor: currentSelection === 'income' ? '#4FC3F7' : '#F2F3F3'}]}>Income</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setCurrentSelection('expense')}>
            <View>
              <Text style={[styles.headerButton, {backgroundColor: currentSelection === 'expense' ? '#4FC3F7' : '#F2F3F3'}]}>Expense</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.inputGroup}>
            <Image source={require('./../images/amount.png')} style={styles.image} />
            <TextInput
              placeholder='Amount'
              style={styles.input}
            />
          </View>
          <View style={styles.inputGroup}>
            <Image source={require('./../images/calendar.png')} style={styles.image} />
            <TextInput
              placeholder='Choose date'
              style={styles.input}
            />
          </View>
          <View style={styles.inputGroup}>
            <Image source={require('./../images/type.png')} style={styles.image} />
            <TextInput
              placeholder='Enter type'
              style={styles.input}
            />
          </View>
          <View style={styles.button}>
            <CustomButton title={`Add ${currentSelection  === 'income' ? 'Income' : 'Expense'}`} />
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

export default AddTransaction

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
  headerText: {
    fontSize: 22,
    textAlign: 'center'
  },
  headerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  headerButton: {
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5
  },
  formGroup: {
    marginTop: 50
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 40,
    flex: 1,
    marginLeft: 20
  },
  button: {
    marginTop: 40
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain'
  }
})