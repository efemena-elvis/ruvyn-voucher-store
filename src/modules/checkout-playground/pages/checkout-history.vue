<template>
  <div class="checkout">
    <div class="tertiary-2-text mgt-4">
      <span class="icon icon-caret-left primary-1-text"></span>
      <router-link to="/checkout-playground">Home</router-link>
    </div>

    <div class="mgy-20 title-text">Checkout History</div>

    <CheckoutHistoryTable />

    <!-- MODALS -->
    <portal to="vesicash-modals">
      <transition name="fade" v-if="show_success_modal">
        <SuccessModal
          main_cta_title="Continue shopping"
          :message="checkoutMessage"
          @done="toggleSuccessModal"
          @closeTriggered="toggleSuccessModal"
          class="cart-success-modal"
        />
      </transition>
    </portal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SuccessModal from "../../../shared/components/success-modal";
import CheckoutHistoryTable from "../components/checkout-history-table";

export default {
  name: "CheckoutHistory",

  components: {
    CheckoutHistoryTable,
    SuccessModal,
  },

  computed: {
    checkoutDescription() {
      return this.$route?.query?.description || "";
    },

    checkoutMessage() {
      return `Your order of <b>${this.checkoutDescription}</b> was succcessful`;
    },
  },

  data() {
    return {
      show_success_modal: false,
    };
  },

  watch: {
    checkoutDescription: {
      handler(desc) {
        this.show_success_modal = !!desc;
      },
      immediate: true,
    },
  },

  methods: {
    ...mapMutations({ CLEAR_CART: "checkout/CLEAR_CART" }),

    toggleSuccessModal() {
      this.show_success_modal = !this.show_success_modal;

      if (this.checkoutDescription && !this.show_success_modal) {
        this.CLEAR_CART();
        this.$router.replace("/checkout-playground/history");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  padding: toRem(5) toRem(60) toRem(100) toRem(60);

  @include breakpoint-down(lg) {
    padding: toRem(5) toRem(30) toRem(100) toRem(30);
  }
}

.title-text {
  font-size: toRem(20);
  font-weight: 600;
}
</style>

<style lang="scss">
.cart-success-modal {
  .modal-outer-container {
    top: 25%;
  }
}
</style>
