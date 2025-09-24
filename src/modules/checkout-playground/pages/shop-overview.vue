<template>
  <div class="overview">
    <div class="title">New arrivals are here</div>
    <div class="subtitle">
      Explore the latest fashion arrivals with our handpicked collection.
    </div>
    <div class="btn-wrapper">
      <router-link to="/arrivals" class="btn btn-lg">
        Shop new arrivals
      </router-link>
    </div>
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
import CheckoutPeview from "../components/checkout-peview";

export default {
  name: "CheckoutShopOverview",

  components: {
    SuccessModal,
    CheckoutPeview,
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
        this.$router.replace("/checkout-playground");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overview {
  height: calc(100vh - 110px);
  background-color: getColor("teal-900");
  padding: toRem(150) toRem(20);

  .title {
    font-size: 3.5rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;

    @include breakpoint-down(md) {
      font-size: 3rem;
    }
  }

  .subtitle {
    width: 50%;
    text-align: center;
    font-size: 1.1rem;
    color: getColor("grey-200");
    margin: auto;

    @include breakpoint-down(lg) {
      width: 65%;
    }

    @include breakpoint-down(md) {
      width: 85%;
    }
  }

  .btn-wrapper {
    @include flex-row-center-nowrap;
    margin-top: 30px;
  }

  .btn {
    background-color: #fff;
    color: #000;
    display: inline-block;
    margin: auto;
  }

  .preview-container {
    position: fixed;
    inset: 0;
    background-color: rgba(#000000, 0.5);
    overflow-y: auto;
  }
}
</style>

<style lang="scss">
.cart-success-modal {
  .modal-outer-container {
    top: 25%;
  }
}
</style>
