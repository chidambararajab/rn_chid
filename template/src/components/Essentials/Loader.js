import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import { IMAGES } from "@theme/";
import { SIZE } from "@theme/";

const Loader = (props) => {
  const statusBarOptions = {
    light: {
      backgroundColor: "#f7f7f7",
      barStyle: "dark-content",
    },
    dark: {
      backgroundColor: "#000",
      barStyle: "light-content",
    },
  };
  const [statusBar, setStatusBar] = useState(statusBarOptions.light);

  useEffect(() => {
    if (props.setDarkStatusBar) {
      setStatusBar(statusBarOptions.dark);
    }
    if (props.setLightStatusBar) {
      setStatusBar(statusBarOptions.light);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={statusBar.backgroundColor}
        barStyle={statusBar.barStyle}
      />
      <LottieView
        source={IMAGES.LOTTIE.loader}
        style={styles.loader}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZE.SCREEN_WIDTH,
    height: SIZE.SCREEN_HEIGHT,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  loader: { height: 200, width: 200 },
  gif: { height: 50, width: 50 },
  message: {
    color: "#070707",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Loader;
