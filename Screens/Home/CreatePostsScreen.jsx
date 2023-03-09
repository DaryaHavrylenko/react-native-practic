import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from "react-native";
import * as Location from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

initialState = {
  postName: "",
  regionName: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    let photo = await camera.takePictureAsync();
    let location = await Location.getCurrentPositionAsync();

    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
    setPhoto(photo.uri);
    //   console.log(photo);
  };

  const sendPhoto = () => {
    console.log(navigation);
    navigation.navigate("PostsScreen", { photo });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

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
          <Camera style={styles.camera} ref={setCamera}>
            {photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 120, width: 120 }}
                ></Image>
              </View>
            )}
            <TouchableOpacity style={styles.ellips} onPress={takePhoto}>
              <MaterialIcons name="photo-camera" size={60} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.downloadText}>Завантажте фото</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            value={state.postName}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, postName: value }))
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
                margi: "#E8E8E8",
              }}
              placeholder="Місцевість"
              value={state.regionName}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, regionName: value }))
              }
              secureTextEntry={true}
              onFocus={() => setisShowKeyboard(true)}
              onSubmitEditing={keyboardHide}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.locationIcon}>
            <Octicons name="location" size={24} color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(keyboardHide, sendPhoto)}
            activeOpacity={0.5}
            style={styles.btn}
          >
            <Text style={styles.textbtn}>Опубліковати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deletePost}>
            <MaterialCommunityIcons
              name="delete-circle"
              size={50}
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
    backgroundColor: "#F6F6F6",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  textbtn: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    borderColor: "#FFFFF",
    borderWidth: 3,
    height: 100,
    width: 100,
  },
  camera: {
    position: "relative",
    alignItems: "center",
    // width: 343,
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
  downloadText: {
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
    marginTop: 120,
  },
});

export default CreatePostsScreen;
