import React from "react";
import { View, Text, Alert, Image, Button, ScrollView, TextInput, StyleSheet, Dimensions, KeyboardAvoidingView } from "react-native";
import SignUpBtn from "../Component/SignUpBtn";

const App = () => {
  return (
    <>
      <View style={styles.top}>
        <Image style={styles.image} source={require("../img/picture2.png")} />
        <Text style={styles.heading1}>Create An {"\n"}Account</Text>
        <View style={styles.content}>
          <Text style={styles.heading2}>Name</Text>
          <TextInput style={styles.input} 
          placeholder="Input your name"
          />
          <Text style={styles.heading2}>Email</Text>
          <TextInput style={styles.input} 
          placeholder="Input your email"
          />
          <Text style={styles.heading2}>Password</Text>
          <TextInput style={styles.input} 
          placeholder="Input your password"
          />
          <Text style={styles.heading2}>Confirm Password</Text>
          <TextInput style={styles.input} 
          placeholder="Input confirm password"
          />
        </View>
        <SignUpBtn title="Sign Up" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.heading2}>Already have an account? </Text>
        <Text style={styles.heading3}>Sign In</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "flex-end",
    marginTop: -30,
    position: "absolute",
  },
  heading1: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 100,
    marginBottom: 10,
    marginLeft: 20,
    color: "black",
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  heading2: {
    fontWeight: "normal",
    fontSize: 18,
    color: "black",
  },
  input: {
    color: "gray",
    marginTop: 5,
    marginBottom: 10,
    height: 40,
    borderColor: "white",
    borderBottomColor: "black",
    borderWidth: 1,
  },
  heading3: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  top: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#4FC3F7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default App;

