import $api from "@/services/service-api";
import axios from "axios";
import { RUVYN_APP_TOKEN } from "@/env";



const routes = {
  // initialize_checkout: "https://mor-staging.vesicash.com/v2/pay/init",
    initialize_checkout: "https://ruvyn-api-hoid9.ondigitalocean.app/api/v1/checkout",

  checkout_history:
    "https://mor-staging.vesicash.com/v2/transactions/get?is_paid_out=true&limit=8",

  // redstone_checkout: "https://redstone-pgs-staging.vesicash.com/init",
    ruvyn_checkout: "https://ruvyn-api-hoid9.ondigitalocean.app/api/v1/checkout",
       ruvyn_order_status: "https://ruvyn-api-hoid9.ondigitalocean.app/api/v1/orders",
};

export default {
  initializeCheckout: async (_, payload) => {
    return await $api.push(routes.initialize_checkout, { payload });
  },

  fetchCheckoutTransactions: async (_, page) => {
    return await $api.fetch(routes.checkout_history + `&page=${page}`);
  },

  initializeZambiaCheckout: async (_, payload) => {
    return await axios.post(routes.ruvyn_checkout, payload , 
     { headers: {Authorization: `Bearer ${RUVYN_APP_TOKEN}`}}
    );
  },

    checkRuvynOrderStatus: async (_, payload) => {
    return await axios.get(`${routes.ruvyn_order_status}/${payload}` , 
     { headers: {Authorization: `Bearer ${RUVYN_APP_TOKEN}`}}
    );
  },

};
