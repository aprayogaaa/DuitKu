import React from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, ScrollView, Image, TouchableWithoutFeedback } from "react-native"
import Footer from "../Component/Footer"
import TransactionCard from "../Component/TransactionCard"

// @ts-ignore
const History = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback>
            <Image source={require('./../img/back.png')} />
          </TouchableWithoutFeedback>
          <Text style={styles.headerText}>Transaction History</Text>
        </View>
        <ScrollView>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

export default History

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
    marginBottom: 20
  },
  headerText: {
    fontSize: 22,
    marginLeft: 40
  }
})