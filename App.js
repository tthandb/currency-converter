import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        autoFocus
        placeholder="100,000,000 VND"
        selectionColor="red"
        textAlign="center"
        keyboardType="number-pad"
        style={styles.textInput}
      ></TextInput>
      <TouchableOpacity style={styles.convertBtn}>
        <Text style={styles.labelBtn}>VND to USD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.convertBtn}>
        <Text style={styles.labelBtn}>USD to VND</Text>
      </TouchableOpacity>
      <Text>Current conrrency:</Text>
      <Text>Conversion conrrency:</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  convertBtn: {},
  labelBtn: {
    borderColor: "#6fa2f2",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: "lightblue",
  },
});
