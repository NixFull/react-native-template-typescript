/**
 *
 * @format
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import "@/translations";
import Routes from "./routes/Routes";

const Main = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Routes />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
