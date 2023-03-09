import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";
import CreatePostsScreen from "./Screens/Home/CreatePostsScreen";

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
    </>
  );
};
