<template>
  <div class="cart-page">
    <router-link to="/">
      <span class="icon icon-caret-left"></span> Home</router-link
    >
    <div class="page-title mgy-20">Shopping Cart</div>

    <div class="cart-layout" v-if="getCart?.length">
      <div class="cart-content">
        <LineItem v-for="item in getCart" :key="item.id" :item="item" />
      </div>

      <div class="cart-summary">
        <div class="secondary-1-text mgb-15">Order Summary</div>

        <div class="summary-item">
          <div class="title">Subtotal</div>
          <div class="value">
            {{ getCountry.sign }}{{ getOrderSummary.subtotal.toFixed(2) }}
          </div>
        </div>
        <div class="summary-item">
          <div class="title">Tax estimate</div>
          <div class="value">
            {{ getCountry.sign }}{{ getOrderSummary.tax.toFixed(2) }}
          </div>
        </div>
        <div class="order-summary">
          <div class="title">Order total</div>
          <div class="value">
            {{ getCountry.sign }}{{ getOrderSummary.total.toFixed(2) }}
          </div>
        </div>
        <div class="tertiary-2-text grey-500 mgt-2">
          Shipping fee will be estimated at checkout
        </div>

        <!-- <div class="tertiary-2-text grey-500 mgt-15">
          You can complete payment at checkout with these
          <a
            href="https://developer.flutterwave.com/docs/integration-guides/testing-helpers/#cards"
            target="_blank"
            >test cards</a
          >
        </div> -->

        <button
          class="btn btn-large btn-primary mgt-40 wt-100"
          ref="checkout"
          @click="initiateZambiaPayment"
        >
          Checkout
        </button>
      </div>
    </div>

    <div class="empty-cart mgt-30" v-else>
      <CartIcon size="80" />
      <div class="primary-1-text grey-900">Your cart is empty</div>
      <div class="secondary-1-text grey-600">
        Add items from new arrivals category
      </div>
      <router-link to="/arrivals" class="btn btn-md btn-primary">
        New arrivals
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineItem from "../components/line-item";
import CartIcon from "../../../shared/components/icon-comps/cart-icon";

export default {
  name: "CartPage",

  components: {
    LineItem,
    CartIcon,
  },

  computed: {
    ...mapGetters({
      getCart: "checkout/getCart",
      getOrderSummary: "checkout/getOrderSummary",
      getCountry: "checkout/getCountry",
      getSettings: "checkout/getSettings",
    }),

    paymentDescription() {
      return this.getCart
        ?.map((item) => `${item.name} x ${item.quantity}`)
        ?.join(", ");
    },

    savedSettings() {
      const code = this.getCountry?.code;

      return this.getSettings[code]
        ? this.getSettings[code]
        : {
            logo: "",
            background: "#818988",
            button: "#2c9a4b",
            payment_options: ["card"],
            shipping_methods: [
              {
                name: "Office Pickup",
                time: "1 day",
                amount: 0,
                currency_code: this.getCountry.currency,
              },
            ],
          };
    },

    mockPaymentModule() {
      const settings = this.savedSettings;

      return {
        country_code: this.getCountry.code,
        currency_code: this.getCountry.currency,
        amount: this.getOrderSummary.subtotal,
        redirect_url: `${location.origin}/checkout-playground/history?description=${this.paymentDescription}`,
        logo_url: settings.logo,
        background_colour: settings.background,
        button_colour: settings.button,
        request_phone_number: true,
        request_country: true,
        request_street_address: true,
        shipping_types: [...settings.shipping_methods],
        product_type: "Clothing",
        description: this.paymentDescription,
        vat: this.getOrderSummary.tax,
        payment_methods: settings.payment_options?.length
          ? [...settings.payment_options]
          : ["card"],
      };
    },
  },

  methods: {
    ...mapActions({
      initializeCheckout: "checkout/initializeCheckout",
      initializeZambiaCheckout: "checkout/initializeZambiaCheckout",
    }),

    async initialize() {
      this.initiateZambiaPayment();

      // if (this.getCountry.name === "Zambia") this.initiateZambiaPayment();
      // else {
      //   try {
      //     this.handleClick("checkout");
      //     const res = await this.initializeCheckout(this.mockPaymentModule);
      //     this.handleClick("checkout", "Checkout", false);

      //     res.code === 200 && res?.data?.link
      //       ? (location.href = res?.data?.link)
      //       : this.pushToast(res.message, "warning");
      //   } catch (err) {
      //     this.pushToast("Order checkout failed", "error");
      //     this.handleClick("checkout", "Checkout", false);
      //   }
      // }
    },

    async initiateZambiaPayment() {
      const requestPayload = {
        amount: this.getOrderSummary.subtotal,
        description: this.paymentDescription

        // currency: "ZMW",
        // country: "ZM",
      
        // method: "mobilemoney",

        // redirect_url: "https://redstonepgs.com/",
        // customer: {
        //   email: "",
        //   first_name: "",
        //   last_name: "",
        // },
      };

      try {
        this.handleClick("checkout");
        const res = await this.initializeZambiaCheckout(requestPayload);
        this.handleClick("checkout", "Checkout", false);

       if( res.status === 200 && res?.data?.payment_details.payment_link)
       {  
              localStorage.setItem(
        "transaction_ref",
        res.data.payment_details.transaction_ref
      );

         this.createAndClickAnchor(
              res?.data?.payment_details.payment_link,
              "_blank"
            )
          }
          else {this.pushToast(res?.message ?? "Order checkout failed", "warning");}
      } catch (err) {
        this.pushToast("Order checkout failed", "error");
        this.handleClick("checkout", "Checkout", false);
      }
    },

    createAndClickAnchor(href, target = "_self") {
      const anchor = document.createElement("a");

      anchor.href = href;
      anchor.target = target;

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-page {
  padding: toRem(30) toRem(60) toRem(100) toRem(60);

  @include breakpoint-down(lg) {
    padding: toRem(30) toRem(30) toRem(100) toRem(30);
  }

  .empty-cart {
    display: grid;
    place-items: center;
    gap: toRem(5);
    width: 100%;
    min-height: toRem(250);
  }

  .page-title {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .cart-layout {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: toRem(50) toRem(70);
    align-items: flex-start;

    @include breakpoint-down(lg) {
      gap: toRem(50);
    }

    @include breakpoint-custom-down(1000) {
      grid-template-columns: 100%;
    }

    .cart-content {
      max-height: toRem(500);
      overflow-y: auto;
      padding-right: toRem(15);

      &::-webkit-scrollbar {
        width: toRem(3.5);
      }

      &::-webkit-scrollbar-track {
        border-radius: toRem(5);
      }

      &::-webkit-scrollbar-thumb {
        border-radius: toRem(5);
        background: getColor("grey-300");
      }

      @include breakpoint-custom-down(1000) {
        max-height: unset;
      }
    }

    .cart-summary {
      background-color: rgb(249, 250, 251);
      border-radius: toRem(15);
      padding: toRem(30);

      .summary-item {
        @include flex-row-between-nowrap;
        border-bottom: getColor("grey-300") solid toRem(0.5);
        padding: toRem(15) 0;

        .title {
          font-size: 0.9rem;
          font-weight: normal;
          color: rgb(75, 85, 99);
        }

        .value {
          font-size: 0.9rem;
          font-weight: 500;
          color: getColor("grey-900");
        }
      }

      .order-summary {
        @include flex-row-between-nowrap;
        padding: toRem(15) 0;

        .title {
          font-size: 1.1rem;
          font-weight: 500;
          color: getColor("grey-800");
        }

        .value {
          font-size: 1.2rem;
          font-weight: 500;
          color: getColor("grey-900");
        }
      }
    }
  }
}
</style>
