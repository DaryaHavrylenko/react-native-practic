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
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

initialState = {
  postName: "",
  regionName: "",
};

const CreatePostsScreen = () => {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const keyboardHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(state);
    setState(initialState);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? -150 : null,
          }}
        >
          <View style={styles.userImage}>
            <TouchableOpacity style={styles.ellips}>
              <MaterialIcons name="photo-camera" size={60} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            onFocus={() => setisShowKeyboard(true)}
            onSubmitEditing={keyboardHide}
          ></TextInput>
          <View style={styles.input}>
            <TextInput
              style={{
                paddingLeft: 24,
                fontSize: 18,
                fontFamily: "Roboto-Regular",
                marginBottom: 32,
              }}
              placeholder="Місцевість"
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
              secureTextEntry={true}
              onFocus={() => setisShowKeyboard(true)}
              onSubmitEditing={
                (keyboardHide,
                () => {
                  navigation.navigate("Home");
                })
              }
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.locationIcon}>
            <Octicons name="location" size={24} color="#E8E8E8" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              (keyboardHide,
              () => {
                navigation.navigate("Home");
              })
            }
            activeOpacity={0.5}
            style={styles.btn}
          >
            <Text style={styles.textbtn}>Опубліковати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deletePost}>
            <MaterialCommunityIcons
              name="delete-circle"
              size={60}
              color="#BDBDBD"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    position: "relative",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    marginHorizontal: 16,
    paddingLeft: 0,
    paddingBottom: 16,
    paddingTop: 16,
    paddingRight: 257,
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
  userImage: {
    position: "relative",
    minWidth: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  ellips: {
    position: "absolute",
    top: 100,
    left: 170,
  },
  text: {
    color: "#BDBDBD",
    marginBottom: 32,
    marginLeft: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  locationIcon: {
    position: "absolute",
    top: 395,
    left: 10,
  },
  deletePost: {
    position: "absolute",
    top: 600,
    left: 190,
  },
});

export default CreatePostsScreen;
