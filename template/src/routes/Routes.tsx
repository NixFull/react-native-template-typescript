import React, { useReducer, useEffect, useMemo } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInStack from "./SignInStack";
import SignOutStack from "./SignOutStack";
import AsyncStore from "@/data/AsyncStore";
import { AuthContext, Navigation } from "./utils";
import { navigationRef } from "./utils";

import SplashScreen from "@/screens/splashScreen/SplashScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: string; userInfo: any }) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userInfo: action.userInfo,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userInfo: action.userInfo,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userInfo: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userInfo: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userInfo: any;
      const prefs = new AsyncStore();

      try {
        userInfo = await prefs.getUserInfo();
      } catch (e) {
        // @todo handle error
      }

      dispatch({ type: "RESTORE_TOKEN", userInfo: JSON.parse(userInfo) });
    };

    bootstrapAsync().finally(() => {});
  }, []);

  const authContext = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      signIn: (data: any, formik: any) => {
        // //@todo Athentication process
      },
      signOut: async () => {
        dispatch({ type: "SIGN_OUT", userInfo: null });
        //@todo logout process
        const prefs = new AsyncStore();
        prefs.disconnect();
      },
      signUp: async (data: any) => {
        dispatch({ type: "SIGN_IN", userInfo: data });
      },
      userInfo: state.userInfo,
    }),
    [state.userInfo]
  );

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        showHideTransition="fade"
        animated
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.isLoading ? (
            <Stack.Screen
              name={Navigation.SPLASH_SCREEN}
              component={SplashScreen}
            />
          ) : state.userInfo == null ? (
            SignOutStack
          ) : (
            SignInStack
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;
