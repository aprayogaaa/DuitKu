import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TransactionCard from './TransactionCard'

// @ts-ignore
const Transaction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>This Month</Text>
        <Text style={styles.headerMore} onPress={() => navigation.navigate('History')}>View more</Text>
      </View>
      <View>
        <ScrollView>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </ScrollView>
      </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    height: 200,
    overflow: 'visible'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 20
  },
  headerMore: {
    fontSize: 14,
    color: '#979797'
  }
})