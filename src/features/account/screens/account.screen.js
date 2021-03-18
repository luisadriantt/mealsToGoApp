import React from "react";
import LottieView from "lottie-react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  Title,
  AnimationWrapper,
  RegisterButton,
} from "../components/account.styles";
import { LoginScreen } from "./login.screen";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <LoginScreen />

        <RegisterButton
          onPress={() => navigation.navigate("Register")}
          dark
          mode="contained"
        >
          Register
        </RegisterButton>
      </AccountContainer>
    </AccountBackground>
  );
};
