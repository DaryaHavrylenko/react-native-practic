import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import PostsScreen from "./PostsScreen";
import { DefaultScreen } from "../NestedScreens/DefaultScreen/DefaultScreen";
// import { ComentsScreen } from "../CommentsScreen/CommentsScreen";
// import { MapScreen } from "../MapScreen/MapScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
// import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

// const NestedScreen = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: (focused, color, size) => (
            <AntDesign name="appstore-o" size={24} color="#212121" />
          ),
        }}
        name="DefaultScreen"
        component={DefaultScreen}
      />
      <Tab.Screen
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: (focused, color, size) => (
            <Ionicons name="add-circle" size={40} color="#FF6C00" />
          ),
          headerLeft: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DefaultScreen");
              }}
              style={{ marginLeft: 16 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: (focused, color, size) => (
            <Feather name="user" size={24} color="#212121" />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
