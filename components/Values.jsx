import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
const { Value, useCode, Clock, set, block } = Animated;
export default function Values() {
  const duration = 2000;
  const time = Value(0);
  let [show, setShow] = useState(true);
  let opacity = new Value(0);
  const clock = new Clock();
  useCode(() => set(opacity, show ? 1 : 0), [show]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{ opacity }}>
          <Text>sdsdd</Text>
        </Animated.View>
      </View>
      <Button title="show" onPress={() => setShow((pre) => !pre)}></Button>
    </View>
  );
}
