import React from "react";
import { SocialIcon } from "react-native-elements";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <SocialIcon
          button
          title="login      "
          type="facebook"
          iconSize={0}
          iconColor="#4267B2"
          onPress={() => navigation.navigate("Login")}
        />
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
