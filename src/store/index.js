import Vue from "vue";
import Vuex from "vuex";

// =========================
// MODULES STORE POINT
// =========================
import general from "./general";
import transactions from "@/modules/transactions/store";
import cms from "./cms";
import checkout from "../modules/checkout-playground/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    transactions,
    cms,
    checkout,
  },
});
