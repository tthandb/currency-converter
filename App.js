import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ConversionTypeButton = (props) => {
  const fromFlag = props.from === "usd" ? "🇺🇲" : "🇻🇳";
  const toFlag = props.to === "usd" ? "🇺🇲" : "🇻🇳";
  const backgroundColor =
    props.fromCurrency === props.from && props.toCurrency === props.to
      ? "lightblue"
      : null;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={() => props.setConversionCurrencies(props.from, props.to)}
    >
      <Text>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};

const FormattedCurrency = (props) => {
  const format = props.type === "usd" ? "us" : "vn";
  const currency = props.type === "usd" ? "USD" : "VND";
  const flag = props.type === "usd" ? "🇺🇸" : "🇻🇳";
  const formatter = new Intl.NumberFormat(format, {
    currency,
    style: "currency",
  });
  return (
    <Text style={styles.currencyText}>
      {formatter.format(props.value)} {flag}
    </Text>
  );
};

export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("vnd");
  const [toCurrency, setToCurrency] = useState("usd");
  const [sampleNumber, setSampleNumber] = useState("100,000,000 VND");
  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };
  const convertCurrency = () => {
    if (fromCurrency === "vnd") {
      setConvertedValue(currentCurrencyValue / 23000);
      setSampleNumber("100,000,000 VND");
    } else {
      setConvertedValue(currentCurrencyValue * 23000);
      setSampleNumber("1,000 USD");
    }
  };
  useEffect(() => {
    convertCurrency();
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        autoFocus
        placeholder={sampleNumber}
        selectionColor="red"
        textAlign="center"
        keyboardType="number-pad"
        style={styles.textInput}
        onChangeText={setFromCurrencyValue}
      ></TextInput>
      <ConversionTypeButton
        from="vnd"
        to="usd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <ConversionTypeButton
        from="usd"
        to="vnd"
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        setConversionCurrencies={setConversionCurrencies}
      />
      <Text>Current currency:</Text>
      <FormattedCurrency type={fromCurrency} value={currentCurrencyValue} />
      <Text>Conversion currenecy:</Text>
      <FormattedCurrency type={toCurrency} value={convertedCurrencyValue} />
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
  button: {
    borderColor: "#6fa2f2",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  textInput: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: "lightblue",
  },
  currencyText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },
});
