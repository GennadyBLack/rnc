import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Photo() {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: "https://images.unsplash.com/photo-1654632213649-fbe774359916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 400,
    height: 400,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
