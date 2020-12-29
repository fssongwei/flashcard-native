import React from "react";
import { View, Text, StyleSheet } from "react-native";

import StartPage from "./StartPage";
import LoginPage from "./AuthPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Login = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="start"
          component={StartPage}
          options={{ title: "Flashcard", headerShown: false }}
        />
        <Stack.Screen
          name="auth"
          component={LoginPage}
          options={{ title: "David Auth" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Login;
