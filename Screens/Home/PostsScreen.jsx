import React from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.userImage}
        source={require("../../assets/userImg.jpg")}
      ></ImageBackground>
      <View style={styles.userData}>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#ffff",
  },
  userImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    borderRadius: 16,
    marginLeft: 17,
    marginTop: 32,
  },
  userData: {
    marginLeft: 84,
    marginTop: 48,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  userEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
});

export default PostsScreen;
