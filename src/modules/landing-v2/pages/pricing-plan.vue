<template>
  <div class="container-layout">
    <Breadcrumb />

    <!-- HERO SECTION -->
    <PricingHeroSection />

    <!-- FEATURE SECTION -->
    <PricingFeatureSection />

    <!-- SERVICE SECTION -->
    <PricingServiceSection />

    <!-- FAQ SECTION -->
    <PricingFAQSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import PricingHeroSection from "@/modules/landing-v2/components/pricing/pricing-hero-section";
import PricingFeatureSection from "@/modules/landing-v2/components/pricing/pricing-feature-section";
import Breadcrumb from "../components/breadcrumb.vue";

export default {
  name: "PricingPlan",

  components: {
    PricingHeroSection,
    PricingFeatureSection,
    Breadcrumb,
    PricingServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-pricing-v2" */ "@/modules/landing-v2/components/pricing/pricing-service-section"
      ),
    PricingFAQSection: () =>
      import(
        /* webpackChunkName: "landing-module-pricing-v2" */ "@/modules/landing-v2/components/pricing/pricing-faq-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped></style>
