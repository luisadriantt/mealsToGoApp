import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Icon } from "react-native-elements";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>hola</Text>
      <Icon
        name="sc-telegram"
        type="evilicon"
        color="#517fa4"
        onPress={() => onLogout()}
      />
    </SafeArea>
  );
};
