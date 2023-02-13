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
} from "react-native";

export const RegistrationScreen = () => {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
  };
  //   const [value, setValue] = useState("");
  //   const inputHandler = (text) => setValue(text);
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -180 : null,
            }}
          >
            <Text style={styles.caption}>Регістрація</Text>
            <View style={{ marginTop: 32 }}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                //   onChangeText={inputHandler}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => setisShowKeyboard(true)}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={keyboardHide}
              activeOpacity={0.5}
              style={styles.btn}
            >
              <Text style={styles.textbtn}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.minitext}>Уже есть аккаунт? Войти</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  form: {
    minHeight: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  caption: {
    textAlign: "center",
    marginTop: 92,
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 6,
    fontSize: 18,
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
  },
  minitext: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
});
