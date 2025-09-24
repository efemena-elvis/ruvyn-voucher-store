<template>
  <div class="home-container container-layout">
    <template v-if="getHomePage">
      <!-- HOME HERO SECTION -->
      <HomeHeroSection />

      <!-- MOR INTRODUCTION SECTION -->
      <MorIntroductionSection />

      <!-- BUSINESS INCORPORATION SECTION -->
      <!-- <BusinessIncorporationSection /> -->

      <!-- TAX SECTION -->
      <!-- <TaxSection /> -->

      <!-- PAYOUT SECTION -->
      <PaymentSection />

      <!-- CLIENT SECTION -->
      <ClientSection />

      <!-- ESCROW INTRODUCTION SECTION -->
      <EscrowIntroductionSection />

      <!-- MARKET FEATURE SECTION -->
      <!-- <MarketFeatureSection /> -->

      <!-- API DOC SECTION -->
      <APIDocSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HomeHeroSection from "@/modules/landing-v2/components/home/home-hero-section";
import MorIntroductionSection from "@/modules/landing-v2/components/home/mor-introduction-section";

export default {
  name: "VesicahHomePage",

  components: {
    HomeHeroSection,
    MorIntroductionSection,
    // BusinessIncorporationSection: () =>
    //   import(
    //     /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/business-incorporation-section"
    //   ),
    // TaxSection: () =>
    //   import(
    //     /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/tax-section"
    //   ),
    ClientSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/client-section"
      ),
    PaymentSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/payment-section"
      ),
    EscrowIntroductionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/escrow-introduction-section"
      ),
    // MarketFeatureSection: () =>
    //   import(
    //     /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/market-feature-section"
    //   ),
    APIDocSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/api-doc-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),

    pageMeta() {
      if (!this.getHomePage) return {};

      return {
        title: "Vesicash",
        titleTemplate: `%s | ${this.getHomePage?.meta?.title}`,

        htmlAttrs: {
          lang: "en-US",
        },

        meta: [
          { charset: "utf-8" },
          {
            name: "description",
            content: this.getHomePage?.meta?.description,
          },
          {
            name: "keywords",
            content: this.getHomePage?.meta?.keywords,
          },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
      };
    },
  },

  async created() {
    !this.getHomePage && (await this.fetchHomePage());
  },

  methods: {
    ...mapActions({
      fetchHomePage: "cms/fetchHomePage",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  min-height: 100vh;
}
</style>
