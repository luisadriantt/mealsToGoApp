import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

const AreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchField = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const ListField = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantsScreen = () => (
  <AreaView>
    <SearchField>
      <Searchbar placeholder="Search" />
    </SearchField>
    <ListField>
      <RestaurantsInfoCard />
    </ListField>
  </AreaView>
);
