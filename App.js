import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import LinearGradient from "react-native-linear-gradient";

const App = () => {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1
  }
});
