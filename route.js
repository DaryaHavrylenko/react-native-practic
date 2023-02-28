import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/Home/PostsScreen";
import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";
import ProfileScreen from "./Screens/Home/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => (
            <AntDesign name="appstore-o" size={24} color="#212121" />
          ),
          headerRight: (focused, color, size) => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => (
            <Ionicons name="add-circle" size={40} color="#FF6C00" />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
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
