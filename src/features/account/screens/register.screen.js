import React, { useState, useContext } from "react";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { SocialIcon } from "react-native-elements";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <Input
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <Input
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <Input
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <SocialIcon
              button
              title="register      "
              type="twitch"
              iconSize={0}
              iconColor="#6441a5"
              onPress={() => onRegister(email, password, repeatedPassword)}
            />
          ) : (
            <Icon name="spinner-2" type="evilicon" color="#6441a5" />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <Icon
          reverse
          name="arrow-undo-sharp"
          type="ionicon"
          color="#6441a5"
          onPress={() => navigation.goBack()}
        />
      </Spacer>
    </AccountBackground>
  );
};
