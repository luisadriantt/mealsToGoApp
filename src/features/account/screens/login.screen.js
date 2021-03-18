import React, { useState, useContext } from "react";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { SocialIcon } from "react-native-elements";

import { LoginContainer, ErrorContainer } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <LoginContainer>
      <Input
        placeholder="email"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
        leftIcon={
          <Icon name="envelope" type="evilicon" size={24} color="black" />
        }
      />
      <Input
        placeholder="password"
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(p) => setPassword(p)}
        leftIcon={<Icon name="lock" type="evilicon" size={24} color="black" />}
      />
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      {!isLoading ? (
        <SocialIcon
          button
          title="login      "
          type="facebook"
          iconSize={0}
          iconColor="#4267B2"
          onPress={() => onLogin(email, password)}
        />
      ) : (
        <Icon name="spinner-2" type="evilicon" color="#4267B2" />
      )}
    </LoginContainer>
  );
};
