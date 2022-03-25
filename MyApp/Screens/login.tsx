import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Alert, Button} from 'react-native';
import ForgetButton from './../Component/ForgetButton';
import SignInButton from '../Component/SignButton';

const App = () => {
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.sc}>
      <View style={{position:'relative'}}>
        <Image source={require('./../img/picture1.png')} style = {{position:'absolute', top:-70}} />
        <Text style={styles.Text}>Welcome {'\n'}Back</Text>
      </View>
      <Text style={styles.Text2}>Email</Text>
      <TextInput style={styles.Input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Input your email"
      />
      <Text style={styles.Text2}>Password</Text>
      <TextInput style={styles.Input}
        textContentType='newPassword'
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Input your password"
      />
      <ForgetButton
        title="Forgot password?"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
      <SignInButton
        title="Sign in"
        // onPress={() => Alert.alert('Simple Button pressed')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sc:{
    backgroundColor:'white',
  },
  Text:{
    color:"white",
    fontWeight:"bold",
    fontSize:40,
    marginTop:100,
    marginLeft:30,
    marginBottom:60,
  },
  Text2:{
    color:"black",
    fontWeight:"normal",
    fontSize:18,
    marginLeft:30,
    marginTop:10,
  },
  Input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft:30,
    marginRight:30,
    borderTopColor:'white',
    borderLeftColor:'white',
    borderRightColor:'white',
  },
})

export default App