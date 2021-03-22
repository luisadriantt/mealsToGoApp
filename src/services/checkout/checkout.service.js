import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IGC5cGnGOCAgE0WdngFstEcqqRJU221LvEZFoaT16pyEgVKnsEb0CDN7MbE2vBfSx6aGXa9G6wERgIv8uFXhv4s00JLa2cO97"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing payment");
    }
    return res.json();
  });
};
