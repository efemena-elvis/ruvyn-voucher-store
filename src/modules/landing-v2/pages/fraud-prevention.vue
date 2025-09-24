<template>
  <div class="container-layout">
    <Breadcrumb :links="getFraudPreventionPage.breadcrumb" />

    <!-- FRAUD HERO SECTION -->
    <FraudHeroSection />

    <!-- FRAUD PAYMENT SECTION -->
    <FraudPaymentSection />

    <!-- FRAUD CHARGEBACK SECTION -->
    <FraudChargebackSection />

    <!-- FRAUD SERVICE SECTION -->
    <FraudServiceSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection :data="getFraudPreventionPage?.onboarding_section" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FraudHeroSection from "@/modules/landing-v2/components/fraud-prevention/fraud-hero-section";
import Breadcrumb from "../components/breadcrumb.vue";

export default {
  name: "FraudPrevention",

  components: {
    FraudHeroSection,
    Breadcrumb,
    FraudPaymentSection: () =>
      import(
        /* webpackChunkName: "landing-module-fraud-v2" */ "@/modules/landing-v2/components/fraud-prevention/fraud-payment-section"
      ),
    FraudChargebackSection: () =>
      import(
        /* webpackChunkName: "landing-module-fraud-v2" */ "@/modules/landing-v2/components/fraud-prevention/fraud-chargeback-section"
      ),
    FraudServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-fraud-v2" */ "@/modules/landing-v2/components/fraud-prevention/fraud-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getFraudPreventionPage: "cms/getFraudPreventionPage" }),
  },

  async mounted() {
    if (!this.getFraudPreventionPage) await this.fetchFraudPreventionPage();
  },

  methods: {
    ...mapActions({ fetchFraudPreventionPage: "cms/fetchFraudPreventionPage" }),
  },
};
</script>

<style lang="scss" scoped></style>
