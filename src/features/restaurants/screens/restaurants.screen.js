import React from "react";
import styled from "styled-components/native";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchField = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchField>
      <Searchbar placeholder="Search" />
    </SearchField>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
      ]}
      renderItem={() => (
        <Spacer possition="bottom" size="large">
          <RestaurantsInfoCard />
        </Spacer>
      )}
      keyStractor={(item) => item.name}
    />
  </SafeArea>
);
