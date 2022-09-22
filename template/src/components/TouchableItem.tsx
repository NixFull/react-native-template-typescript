/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/* @flow */

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
import React, { Component, Children } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const ANDROID_VERSION_LOLLIPOP = 21;

interface Props {
  onPress: () => void;
  delayPressIn?: number;
  borderless?: any;
  pressColor?: any;
  activeOpacity?: number;
  children?: React.ReactNode;
  style?: any;
}

const TouchableItem = (props: Props) => {
  const { style, children, borderless, pressColor, ...rest } = props;

  if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        {...rest}
        style={null}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}>
        <View style={style}>{Children.only(children)}</View>
      </TouchableNativeFeedback>
    );
  }

  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

TouchableItem.DefaultProps = {
  pressColor: 'rgba(0, 0, 0, .32)',
  children: null,
  borderless: false,
};

export default TouchableItem;
