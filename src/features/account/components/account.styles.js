import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  width: 80%;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[5]};
`;

export const LoginContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 5px;
  padding: ${(props) => props.theme.space[2]};
`;

export const LoginButton = styled(Button).attrs({
  color: "#fe5a5e",
})`
  border-radius: 25px;
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RegisterButton = styled(Button).attrs({
  color: "#8DDF71",
})`
  border-radius: 25px;
  padding: ${(props) => props.theme.space[2]};
`;
