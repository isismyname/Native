import * as React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import AppLoading from "expo-app-loading";
import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from '@expo-google-fonts/roboto-condensed';

// Import Container
import Container from "./Container";

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
});

  // Setup Font
  const fontConfig = {
    RobotoCondensed: {
      300: {
        normal: "RobotoCondensed_300Light",
        italic: "RobotoCondensed_300Light_Italic",
      },
      400: {
        normal: "RobotoCondensed_400Regular",
        italic: "RobotoCondensed_400Regular_Italic",
      },
      700: {
        normal: "RobotoCondensed_700Bold",
        italic: "RobotoCondensed_700Bold_Italic",
      },
    },
  };

  // Setup Opacity
  const opacity = {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  };
  

  // Setup Custome Theme
  const customeColor = {
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
    purple: {
      700: "#7e22ce",
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    opacity,
    fontConfig,
    fonts: {
      heading: "RobotoCondensed",
      body: "RobotoCondensed",
      mono: "RobotoCondensed",
    },
    config: { initialColorMode: "dark" },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}