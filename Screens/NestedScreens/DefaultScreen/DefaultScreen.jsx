import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import PostsScreen from "../../Home/PostsScreen";
import CommentsScreen from "../CommentsScreen/CommentsScreen";
import MapScreen from "../MapScreen/MapScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const NestedScreen = createStackNavigator();

export const DefaultScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerLeft: () => null,
          headerRight: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{ marginRight: 10 }}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerLeft: () => null,
          headerLeft: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PostsScreen");
              }}
              style={{ marginLeft: 10 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerLeft: () => null,
          headerLeft: (focused, color, size) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PostsScreen");
              }}
              style={{ marginLeft: 10 }}
            >
              <AntDesign name="arrowleft" size={24} color="#212121" />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};
