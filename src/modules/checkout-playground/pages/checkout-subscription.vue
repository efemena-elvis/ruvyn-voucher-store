<template>
  <div class="overview">
    <div class="d-flex justify-content-between items-center items-center">
      <div>
        <div class="h5-text">Payment Link</div>
        <div class="grey-600">
          Must have created a payment module to use this feature
        </div>
      </div>
      <router-link to="/checkout-playground/history"
        >Checkout history</router-link
      >
    </div>

    <div class="subscriptions">
      <SubscriptionCard
        v-for="(sub, i) in getSubs"
        :key="i + sub.name"
        :sub="sub"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubscriptionCard from "../components/subscription-card.vue";
export default {
  name: "CheckoutSubscription",

  components: {
    SubscriptionCard,
  },

  computed: {
    ...mapGetters({ getSubs: "checkout/getSubs" }),
  },
};
</script>

<style lang="scss" scoped>
.overview {
  padding: toRem(45) toRem(60);

  @include breakpoint-down(lg) {
    padding: toRem(45) toRem(30);
  }
}

.subscriptions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: toRem(50);
  margin-top: toRem(50);
}
</style>
