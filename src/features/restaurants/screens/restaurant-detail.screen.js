import React, { useContext } from "react";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantMenu } from "../../../features/restaurants/components/restaurant-menu-list";
import { CartContext } from "../../../services/cart/cart.context";
import { Spacer } from "../../../components/spacer/spacer.component";

import { OrderButton } from "../components/restaurant-list-styles";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <RestaurantMenu />
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
