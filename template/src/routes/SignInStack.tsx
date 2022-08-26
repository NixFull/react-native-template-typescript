import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigation from "./Navigation";

import Home from "@/screens/home/Home";

const Stack = createNativeStackNavigator();

const SignInStack = (
  <Stack.Group screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name={Navigation.HOME}
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Group>
);

export default SignInStack;
