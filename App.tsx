import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Values from "./components/Values";

export default function App() {
  return <Values />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
