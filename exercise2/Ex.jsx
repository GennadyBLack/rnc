import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Page from "./Page";

const WORDS = ["You", "are", "pidor", "now"];

export default function Ex() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((e) => {
    translateX.value = e.contentOffset.x;
    console.log(translateX.value);
  });

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
      onScroll={scrollHandler}
    >
      {WORDS.map((item, idx) => {
        return (
          <Page title={item} key={idx} index={idx} translateX={translateX} />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
