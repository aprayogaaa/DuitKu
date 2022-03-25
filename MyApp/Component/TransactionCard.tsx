import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>12-13</Text>
      <View  style={styles.detail}>
        <View style={styles.detailLeft}>
          {/* <Image source={require('./../../images/income.png')} style={{ resizeMode: 'contain', width: 16, height: 16 }} /> */}
          <Text>Cash</Text>
        </View>
        <Text>100,000</Text>
      </View>
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F3',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  date: {
    backgroundColor: '#366ED8',
    borderRadius: 100,
    color: 'white',
    padding: 5
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  detailLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})