import React, { useEffect } from "react";
import { StyleSheet, StatusBar, Keyboard, View } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "@/commons/themes";
import { goBack } from "@/routes/utils";

interface Props {
  title?: string;
  canGoBack?: boolean;
  settings?: boolean;
  customButton?: JSX.Element;
  customGoBackAction?: () => void;
}

const Header = (props: Props) => {
  const { title, canGoBack, customButton, customGoBackAction } = props;
  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const keyboardDidShow = () => navigation.setOptions({ tabBarVisible: false });
  const keyboardDidHide = () => navigation.setOptions({ tabBarVisible: true });

  return (
    <>
      <StatusBar
        backgroundColor={Colors.defaultPrimaryColor}
        barStyle="light-content"
      />
      <Appbar.Header style={styles.container}>
        {canGoBack && (
          <Appbar.BackAction
            onPress={customGoBackAction ? customGoBackAction : goBack}
            color={Colors.white}
          />
        )}
        <Appbar.Content
          title={title}
          style={styles.appContentContainer}
          color={Colors.white}
        />

        {customButton && React.cloneElement(customButton)}
      </Appbar.Header>
    </>
  );
};

Header.defaultProps = {
  title: "",
  canGoBack: false,
  settings: true,
  customButton: <View />,
  customGoBackAction: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultPrimaryColor,
    elevation: 0,
    height: 56,
  },
  appContentContainer: {
    elevation: 0,
    height: 56,
    justifyContent: "center",
  },
});

export default Header;
