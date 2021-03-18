import React from "react";
import { SocialIcon } from "react-native-elements";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  Title,
} from "../components/account.styles";
import { LoginScreen } from "./login.screen";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <LoginScreen />
        <SocialIcon
          button
          title="register      "
          type="twitch"
          iconSize={0}
          iconColor="#6441a5"
          onPress={() => navigation.navigate("Register")}
        />
      </AccountContainer>
    </AccountBackground>
  );
};
