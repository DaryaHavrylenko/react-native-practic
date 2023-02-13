import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  //   const [isShowKeyboard, setisShowKeyboard] = useState(false);
  //   const keyboardHide = () => {
  //     setisShowKeyboard(false);
  //     Keyboard.dismiss();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./Screens/images/backgroundImg.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
});
