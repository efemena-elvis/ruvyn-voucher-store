<template>
  <div class="container-layout">
    <template v-if="getCheckoutPage">
      <!-- HERO SECTION -->
      <CheckoutHeroSection />

      <!-- WIDGET SECTION -->
      <CheckoutWidgetSection />

      <!-- SERVICE SECTION -->
      <CheckoutServiceSection />

      <!-- JOURNEY SECTION -->
      <CheckoutJourneySection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getCheckoutPage.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CheckoutHeroSection from "@/modules/landing-v2/components/checkout/checkout-hero-section";

export default {
  name: "CheckoutPage",

  components: {
    CheckoutHeroSection,
    CheckoutWidgetSection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-widget-section"
      ),
    CheckoutServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-service-section"
      ),
    CheckoutJourneySection: () =>
      import(
        /* webpackChunkName: "landing-module-checkout-v2" */ "@/modules/landing-v2/components/checkout/checkout-journey-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getCheckoutPage: "cms/getCheckoutPage" }),
  },

  async mounted() {
    if (!this.getCheckoutPage) await this.fetchCheckoutPage();
  },

  methods: {
    ...mapActions({ fetchCheckoutPage: "cms/fetchCheckoutPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
