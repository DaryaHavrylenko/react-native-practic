import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Button,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};
export const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/backgroundImg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? -180 : null,
              }}
            >
              <Text style={styles.caption}>Увійти</Text>

              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setisShowKeyboard(true)}
                  onSubmitEditing={keyboardHide}
                ></TextInput>
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  secureTextEntry={true}
                  onFocus={() => setisShowKeyboard(true)}
                  onSubmitEditing={keyboardHide}
                ></TextInput>
              </View>
              <TouchableOpacity
                onPress={keyboardHide}
                activeOpacity={0.5}
                style={styles.btn}
              >
                <Text style={styles.textbtn}>Увійти</Text>
              </TouchableOpacity>
              <View>
                <Text
                  onPress={() => {
                    navigation.navigate("Registration");
                  }}
                  title="Нема акаунта? Зареєструватися"
                  style={styles.minitextbtn}
                >
                  Нема акаунта? Зареєструватися
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    position: "relative",
    minHeight: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  caption: {
    textAlign: "center",
    marginTop: 92,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 6,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    marginHorizontal: 16,
    padding: 16,
    // paddingLeft: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  textbtn: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  minitextbtn: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
