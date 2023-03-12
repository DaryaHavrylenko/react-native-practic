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
} from "react-native";
import { useDispatch } from "react-redux";
import { authRegistrationUser } from "../../redux/auth/authOperation";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(state);
    dispatch(authRegistrationUser(state));
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
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
              <View style={styles.userImage}>
                <TouchableOpacity style={styles.btnAddUserImage}>
                  <Text style={styles.btnAddUserImage_add}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.caption}>Реєстрація</Text>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Login"
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  onFocus={() => setisShowKeyboard(true)}
                  onSubmitEditing={handleSubmit}
                ></TextInput>
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  onFocus={() => setisShowKeyboard(true)}
                  onSubmitEditing={handleSubmit}
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
                  onSubmitEditing={handleSubmit}
                ></TextInput>
              </View>
              <TouchableOpacity
                onPress={
                  (handleSubmit,
                  () => {
                    navigation.navigate("Home");
                  })
                }
                activeOpacity={0.5}
                style={styles.btn}
              >
                <Text style={styles.textbtn}>Зареєструватися</Text>
              </TouchableOpacity>
              <View>
                <Text
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                  style={styles.minitext}
                >
                  Вже є акаунт? Увійти
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
    flex: 1,
    // justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  form: {
    position: "relative",
    minHeight: 549,
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
  minitext: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  userImage: {
    position: "absolute",
    top: -60,
    right: 150,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAddUserImage: {
    position: "absolute",
    bottom: 14,
    right: -12,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: "50%",
    width: 25,
    height: 25,
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  btnAddUserImage_add: {
    fontSize: 18,
    color: "#FF6C00",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
