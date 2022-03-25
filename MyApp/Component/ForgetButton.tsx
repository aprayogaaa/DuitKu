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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor:'white',
    borderColor:'white'
  },
  text:{
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'grey',
  },
});