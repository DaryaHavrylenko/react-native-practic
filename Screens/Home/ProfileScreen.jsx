import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../images/backgroundImg.jpg")}
      >
        <View style={styles.form}>
          <TouchableOpacity style={styles.exit}>
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={styles.userImage}
          source={require("../images/profileImg.png")}
        >
          <TouchableOpacity style={styles.btnAddUserImage}>
            <Text style={styles.btnAddUserImage_add}>x</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
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
    minHeight: 665,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  exit: {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 16,
    marginTop: 22,
  },
  userImage: {
    position: "absolute",
    top: 110,
    right: 150,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnAddUserImage: {
    position: "absolute",
    top: 95,
    right: -12,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: "50%",
    width: 25,
    height: 25,
    alignItems: "center",
    backgroundColor: "#FFFFF",
    // justifyContent: "flex-start",
  },
  btnAddUserImage_add: {
    fontSize: 18,
    color: "#BDBDBD",
    backgroundColor: "#FFFFF",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
