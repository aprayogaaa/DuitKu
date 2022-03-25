import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.greetingName}>Sisca</Text>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>My balance</Text>
        <Text style={styles.balanceAmount}>120,000</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#366ED8',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    elevation: 10,
    paddingTop: Platform.OS === 'android'
                ? typeof StatusBar.currentHeight === 'number'
                  ? StatusBar.currentHeight + 20 
                  : 0 
                : 0
  },
  avatarContainer: {
    flexDirection: 'row'
  },
  avatar: {
    backgroundColor: '#ccc',
    borderRadius: 100,
    width: 60,
    height: 60
  },
  greetingContainer: {
    marginLeft: 20,
    flexDirection: 'row'
  },
  greeting: {
    color: '#fff',
    fontSize: 20
  },
  greetingName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  balanceTitle: {
    color: '#4FC3F7'
  },
  balanceAmount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 5
  }
})