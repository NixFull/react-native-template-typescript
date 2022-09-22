import React from 'react';
import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';

export { default as Navigation } from './Navigation';

export const AuthContext = React.createContext({
  signIn: () => {},
  signOut: () => {},
  userInfo: {},
});

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(name: keyof any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    );
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
