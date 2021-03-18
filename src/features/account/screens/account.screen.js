import React from "react";
import { SocialIcon } from "react-native-elements";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";
import { LoginScreen } from "./login.screen";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
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
