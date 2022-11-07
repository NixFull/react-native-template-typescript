import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigation from "./Navigation";

import Authentication from "@/screens/authentication/Authentication";

const Stack = createNativeStackNavigator();

const SignOutStack = (
  <Stack.Group screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name={Navigation.AUTHENTICATION}
      component={Authentication}
      options={{ headerShown: false }}
    />
  </Stack.Group>
);

export default SignOutStack;
