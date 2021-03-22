import styled from "styled-components/native";
import { Avatar, Button, Colors, ActivityIndicator } from "react-native-paper";
import { Input } from "react-native-elements";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.ui.wred};
`;
export const EmailInput = styled(Input)`
  margin: ${(props) => props.theme.space[1]};
`;
export const NameInput = styled(Input)`
  margin: ${(props) => props.theme.space[1]};
`;
export const AddressInput = styled(Input)`
  margin: ${(props) => props.theme.space[1]};
`;
export const PaymentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-left: ${(props) => props.theme.space[5]};
  padding-right: ${(props) => props.theme.space[5]};
  padding-bottom: ${(props) => props.theme.space[1]};
  padding-top: ${(props) => props.theme.space[1]};
`;
export const ClearButton = styled(Button).attrs({
  color: colors.ui.wred,
})`
  width: 60%;
  align-self: center;
`;
export const PayButton = styled(Button).attrs({
  color: colors.ui.wgreen,
})`
  width: 60%;
  align-self: center;
`;
export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: "small",
  animating: true,
  color: Colors.blue300,
})``;
