import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import History from './Screens/history'
import Home from './Screens/home'
import AddTransaction from './Screens/addTransaction';
import Profile from './Screens/profile'
import About from './Screens/about'
import PersonalData from './Screens/personalData'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="History"
            component={History}
          />
          <Stack.Screen
            name="AddTransaction"
            component={AddTransaction}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name="About"
            component={About}
          />
          <Stack.Screen
            name='PersonalData'
            component={PersonalData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App