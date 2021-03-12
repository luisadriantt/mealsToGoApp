import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "La restaurant",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/44/6c/d6/simon-7-84-mas-que-una.jpg",
    ],
    address = "calle viej",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
