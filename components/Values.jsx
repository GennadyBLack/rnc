import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// import Animated, { Extrapolate } from "react-native-reanimated";

import { useMemoOne } from "use-memo-one";

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  box: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    margin: 100,
  },
});
// const {
//   Value,
//   useCode,
//   Clock,
//   set,
//   block,
//   clockRunning,
//   not,
//   cond,
//   add,
//   interpolateNode,
//   startClock,
//   interpolate,
//   eq,
//   stopClock,
// } = Animated;

// export default function Values() {
//   const { time, clock, progress } = useMemoOne(
//     () => ({
//       time: new Value(0),
//       clock: new Clock(),
//       progress: new Value(0),
//     }),
//     []
//   );

//   const duration = 2000;

//   let [show, setShow] = useState(true);

//   let opacity = interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: show ? [0, 1] : [1, 0],
//     extrapolate: Extrapolate.CLAMP,
//   });

//   useCode(
//     block([
//       cond(not(clockRunning(clock)), [startClock(clock), set(time, clock)]),
//       set(
//         progress,
//         interpolateNode(clock, {
//           inputRange: [time, add(time, duration)],
//           outputRange: [0, 1],
//           extrapolate: Extrapolate.CLAMP,
//         })
//       ),
//       cond(eq(progress, 1), stopClock(clock)),
//     ]),
//     []
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Animated.View style={{ opacity }}>
//           <Text>sdsdd</Text>
//         </Animated.View>
//       </View>
//       <Button title="show" onPress={() => setShow((pre) => !pre)}></Button>
//     </View>
//   );
// }

// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
// } from "react-native-reanimated";

// export default function Values() {
//   const offset = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: offset.value * 255 }],
//     };
//   });

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />

//       <Button
//         onPress={() => {
//           alert("here"), (offset.value = 100);
//         }}
//         title={offset.value}
//       />
//     </>
//   );
// }

import Animated, {
  withSpring,
  useSharedValue,
  withSequence,
  withRepeat,
  useAnimatedStyle,
  Easing,
  withTiming,
} from "react-native-reanimated";

// export default function Values() {
//   const offset = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: withSpring(offset.value * 255, {
//             damping: 20,
//             stiffness: 90,
//           }),
//         },
//         {
//           translateY: withSpring(offset.value * 255, {
//             damping: 20,
//             stiffness: 90,
//           }),
//         },
//       ],
//     };
//   });

//   return (
//     <>
//       <Animated.View style={[styles.box, animatedStyles]} />
//       <Button
//         onPress={() => {
//           offset.value = withTiming(Math.random(), {
//             duration: 1000,
//             easing: Easing.out(Easing.exp),
//           });
//         }}
//         title="Move"
//       />
//     </>
//   );
// }

export default function Values(props) {
  const ANGLE = -10;
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button
        title="wobble"
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withRepeat(withTiming(10, { duration: 1000 }), 100, true),
            withTiming(0, { duration: 50 })
          );
          // will be filled in later
        }}
      />
    </>
  );
}
