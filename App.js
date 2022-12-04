import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import StartGameScreen from "./screens/StartGameScreen";

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1
  }
});
