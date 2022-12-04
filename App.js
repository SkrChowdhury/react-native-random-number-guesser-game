import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground
} from "react-native";
import React from "react";
import StartGameScreen from "./screens/StartGameScreen";
import LinearGradient from "react-native-linear-gradient";

const App = () => {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
