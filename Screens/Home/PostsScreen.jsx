import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  //   console.log(posts);
  //   console.log(route.params);
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
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => {
          indx.id;
        }}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 32,
              marginBottom: 8,
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <Image source={{ uri: item.photo }} style={styles.postsImg} />
          </View>
        )}
      ></FlatList>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MapScreen");
        }}
        style={styles.locationIcon}
      >
        <Octicons name="location" size={24} color="#9d1f1f" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CommentsScreen");
        }}
        style={styles.commentsIcon}
      >
        <FontAwesome5 name="comment" size={24} color="#a21616" />
      </TouchableOpacity>
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
  postsImg: {
    height: 240,
    alignItems: "center",
    borderRadius: 8,
  },
  locationIcon: {
    position: "absolute",
    top: 350,
    left: 20,
  },
  commentsIcon: {
    position: "absolute",
    top: 350,
    left: 50,
  },
});

export default PostsScreen;
