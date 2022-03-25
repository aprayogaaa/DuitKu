import React from "react";
import { Image, View, Text, Alert, Button, ScrollView, TextInput, StyleSheet } from "react-native";
import SubmitBtn from "../Component/SubmitBtn";

const App = () => {
  return (
    <>
      <View>
        <Image source={require("./../img/back.png")} style={styles.back} />
        <Text style={styles.heading}>Add Balance</Text>
        <Text style={styles.text}>
          In order to examine income and {"\n"}expenses in daily transactions, enter the {"\n"}initial balance.
        </Text>
        <TextInput style={styles.input} defaultValue="Rp" />
        <SubmitBtn title="Submit" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  back: {
    marginTop: 70,
    marginLeft: 30,
  },
  heading: {
    fontWeight: "bold",
    color: "black",
    fontSize: 40,
    marginTop: 50,
    marginLeft: 30,
  },
  text: {
    fontWeight: "normal",
    color: "#979797",
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 30,
  },
  input: {
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 60,
    fontWeight: "bold",
    color: "#979797",
    height: 50,
    borderColor: "#4FC3F7",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    // keyboardType: "numeric",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    elevation: 2,
  },
});

export default App;
