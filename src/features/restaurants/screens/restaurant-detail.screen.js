import React from "react";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantMenu } from "../../../features/restaurants/components/restaurant-menu-list";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <>
      <RestaurantsInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </>
  );
};
