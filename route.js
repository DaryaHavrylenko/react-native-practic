import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";
import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
// import PostsScreen from "./Screens/Home/PostsScreen";
// import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
// import ProfileScreen from "./Screens/Home/ProfileScreen";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { Feather } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen
          //   options={{ headerShown: false }}
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  }
  return (
    <>
      <Home />
      <CreatePostsScreen></CreatePostsScreen>
    </>
  );
};
