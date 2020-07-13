import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TouchableOpacity style={styles.convertBtn}>
        <Text style={styles.labelBtn}>VND to USD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.convertBtn}>
        <Text style={styles.labelBtn}>VND to USD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  convertBtn: {},
  labelBtn: {},
});
