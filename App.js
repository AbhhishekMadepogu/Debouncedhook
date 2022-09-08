import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function App() {
  const updateDebounceText = debounce((text) => {
    console.log(text);
  });
  function debounce(cb, delay = 500) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Edit me"
        onChangeText={(text) => updateDebounceText(text)}
      ></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
