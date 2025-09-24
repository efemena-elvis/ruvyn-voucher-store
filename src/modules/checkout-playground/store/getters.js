export default {
  getCart: (state) => state.cart,

  getCategories: (state) => state.categories,

  getCartCount: (state) => {
    if (!state?.cart?.length) return 0;
    return state.cart?.reduce((sum, item) => {
      sum += item.quantity;
      return sum;
    }, 0);
  },

  getOrderSummary: (state) => {
    const cart = state.cart;
    if (!cart?.length)
      return {
        subtotal: 0.0,
        tax: 0.0,
        total: 0.0,
      };
    const subtotal = cart?.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);

    const tax = cart?.reduce((total, item) => {
      total += item.tax;
      return total;
    }, 0);

    const total = subtotal + tax;
    return {
      subtotal,
      tax,
      total,
    };
  },

  getCountry: (state) => state.checkout_country,

  getSettings: (state) => state.checkout_settings,

  getSubs: (state) => state.subscriptions,
};
