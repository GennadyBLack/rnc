import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Values from "./components/Values";
import Ball from "./components/Ball";
import PhotoS from "./components/PhotoS";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return <GestureHandlerRootView style={styles.container}><PhotoS/></GestureHandlerRootView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
