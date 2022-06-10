import { StyleSheet, Text, View } from "react-native";
import Values from "./components/Values";
import Ball from "./components/Ball";
import PhotoS from "./components/PhotoS";
import { GestureHandlerRootView, PanGestureHandler,GestureDetector,Gesture } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Page from "./components/Page";

const WORDS =  ['Are','you','pidor','Now']

export default function App() {

  const gesture = Gesture.Pan().onUpdate((e) => {
    
  })

  return   <Animated.ScrollView horizontal style={styles.container}>
{WORDS.map((item,key)=>{
  return <Page key={key} index={key} title={item}/> 
})}
       </Animated.ScrollView>
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  circle:{
    height:80,
    aspectRatio:1,
    backgroundColor:'red',
    borderRadius:40,
    opacity:0.8,
  }
});
