import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
// @ts-ignore

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:5,
    backgroundColor:'#366ED8',
    borderColor:'white',
    marginLeft:75,
    marginRight:75,
  },
  text:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight:'bold',
    letterSpacing: 0.25,
    color:'white',
  },
});