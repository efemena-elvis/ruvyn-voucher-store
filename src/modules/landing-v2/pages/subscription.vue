<template>
  <div class="container-layout">
    <template v-if="getSubscriptionPage">
      <!-- HERO SECTION -->
      <SubscriptionHeroSection />

      <!-- SERVICE SECTION -->
      <SubscriptionServiceSection />

      <!-- PRODUCT SECTION -->
      <SubscriptionProductSection />

      <!-- CUSTOMER SECTION -->
      <SubscriptionCustomerSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getSubscriptionPage.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SubscriptionHeroSection from "@/modules/landing-v2/components/subscription/subscription-hero-section";

export default {
  name: "SubscriptionPage",

  components: {
    SubscriptionHeroSection,
    SubscriptionServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-service-section"
      ),
    SubscriptionProductSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-product-section"
      ),
    SubscriptionCustomerSection: () =>
      import(
        /* webpackChunkName: "landing-module-subscription-v2" */ "@/modules/landing-v2/components/subscription/subscription-customer-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getSubscriptionPage: "cms/getSubscriptionPage" }),
  },

  async mounted() {
    if (!this.getCheckoutPage) await this.fetchSubscriptionPage();
  },

  methods: {
    ...mapActions({ fetchSubscriptionPage: "cms/fetchSubscriptionPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
