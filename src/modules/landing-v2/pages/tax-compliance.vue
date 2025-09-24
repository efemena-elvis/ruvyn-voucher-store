<template>
  <div class="container-layout">
    <template v-if="getTaxCompliancePage">
      <Breadcrumb :links="getTaxCompliancePage.breadcrumb" theme="light" />

      <!-- TAX HERO SECTION -->
      <TaxHeroSection />

      <!-- TAX COLLECTION SECTION -->
      <TaxCollectionSection />

      <!-- TAX SERVICE SECTION -->
      <TaxServiceSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getTaxCompliancePage?.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaxHeroSection from "@/modules/landing-v2/components/tax-compliance/tax-hero-section";
import Breadcrumb from "../components/breadcrumb.vue";

export default {
  name: "TaxCompliance",

  components: {
    TaxHeroSection,
    Breadcrumb,
    TaxCollectionSection: () =>
      import(
        /* webpackChunkName: "landing-module-tax-v2" */ "@/modules/landing-v2/components/tax-compliance/tax-collection-section"
      ),
    TaxServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-tax-v2" */ "@/modules/landing-v2/components/tax-compliance/tax-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getTaxCompliancePage: "cms/getTaxCompliancePage" }),
  },

  async mounted() {
    if (!this.getTaxCompliancePage) await this.fetchTaxCompliancePage();
  },

  methods: {
    ...mapActions({ fetchTaxCompliancePage: "cms/fetchTaxCompliancePage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
