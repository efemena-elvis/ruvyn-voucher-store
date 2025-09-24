import {
  updatePlaygroundCart,
  updatePlaygroundCountry,
} from "../../../utilities/product-categories";

import {
  updateCheckoutSettings,
  updateSubscriptionLinkSettings,
} from "../constants/mor-countries";

export default {
  ADD_PRODUCT_TO_CART: (state, product) => {
    const productIndex = state.cart?.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex === -1) state.cart.push({ ...product, quantity: 1 });
    else {
      state.cart = state.cart?.map((item) => {
        if (item.id !== product.id) return item;
        else return { ...item, quantity: item.quantity + 1 };
      });
    }
    updatePlaygroundCart(state.cart);
  },

  REMOVE_CART_ITEM: (state, product) => {
    state.cart = state.cart?.filter((item) => item.id !== product.id);
    updatePlaygroundCart(state.cart);
  },

  UPDATE_CART_ITEM: (state, { product, quantity }) => {
    state.cart = state.cart?.map((item) => {
      if (item.id !== product.id) return item;
      else return { ...item, quantity };
    });

    updatePlaygroundCart(state.cart);
  },

  CLEAR_CART: (state) => {
    state.cart = [];
    updatePlaygroundCart([]);
  },

  SET_CHECKOUT_COUNTRY: (state, country) => {
    state.checkout_country = country;
    updatePlaygroundCountry(country);
  },

  UPDATE_CHECKOUT_SETTINGS: (state, { code, field, data }) => {
    state.checkout_settings[code][field] = data;
    updateCheckoutSettings(state.checkout_settings);
  },

  UPDATE_SUB_LINK: (state, { name, link }) => {
    updateSubscriptionLinkSettings(state.subscriptions, { name, link });
  },
};
