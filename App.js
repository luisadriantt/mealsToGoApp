import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyByPeNUsnl_0msGzd9uPE7jUKrayyO6R0Y",
  authDomain: "mealstogo-cf00d.firebaseapp.com",
  projectId: "mealstogo-cf00d",
  storageBucket: "mealstogo-cf00d.appspot.com",
  messagingSenderId: "79279256962",
  appId: "1:79279256962:web:a3910ec4bd4a65fb228b9b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
