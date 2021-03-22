import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  CartIconContainer,
  CartIcon,
  EmailInput,
  NameInput,
  AddressInput,
  PaymentContainer,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles.js";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthenticationContext);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoadding, setIsLoadding] = useState(false);

  const onPay = () => {
    setIsLoadding(true);
    if (!card || !card.id) {
      setIsLoadding(false);
      navigation.navigate("CheckoutError", {
        error: "Fill a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((ressult) => {
        setIsLoadding(false);
        navigation.navigate("CheckoutSuccess");
        clearCart();
      })
      .catch((err) => {
        navigation.navigate("CheckoutError", { error: err });
        setIsLoadding(false);
      });
  };

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text> Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item}: ${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text> Total:{sum / 100}</Text>
        </Spacer>
        <PaymentContainer>
          <EmailInput
            placeholder={user.email}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(t) => {
              if (t) {
                setEmail(t);
              } else {
                setEmail(null);
              }
            }}
            leftIcon={<Icon name="at" size={24} color="#e6e1e1" />}
          />
          <NameInput
            placeholder="name"
            value={name}
            onChangeText={(t) => {
              if (t) {
                setName(t);
              } else {
                setName(null);
              }
            }}
            leftIcon={<Icon name="user" size={24} color="#e6e1e1" />}
          />
          <AddressInput
            placeholder="address"
            value={address}
            onChangeText={(t) => {
              if (t) {
                setAddress(t);
              } else {
                setAddress(null);
              }
            }}
            leftIcon={<Icon name="address-card" size={24} color="#e6e1e1" />}
          />
        </PaymentContainer>
        {email && <CreditCardInput name={name} onSuccess={setCard} />}
        <Spacer position="top" size="medium">
          {!isLoadding ? (
            <PayButton icon="cash-usd" dark mode="contained" onPress={onPay}>
              Pay
            </PayButton>
          ) : (
            <PaymentProcessing />
          )}
        </Spacer>
        <Spacer position="top" size="medium">
          {!isLoadding && (
            <ClearButton
              icon="cart-off"
              disble={isLoadding}
              dark
              mode="contained"
              onPress={clearCart}
            >
              Clear cart
            </ClearButton>
          )}
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
