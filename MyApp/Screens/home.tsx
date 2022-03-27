import React from 'react'
import { View, StyleSheet } from 'react-native'
import Footer from '../Component/Footer'
import Transaction from '../Component/Transaction'
import Chart from './../Component/Chart'
import Header from './../Component/Header'

// @ts-ignore
const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Chart />
        <Transaction navigation={navigation} />
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})