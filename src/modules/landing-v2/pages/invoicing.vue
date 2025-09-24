<template>
  <div class="container-layout">
    <template v-if="getB2BInvoicingPage">
      <!-- HERO SECTION -->
      <InvoiceHeroSection />

      <!-- INVOICE BILLING SECTION -->
      <InvoiceBillingSection />

      <!-- INVOICE TAILORING SECTION -->
      <InvoiceTailoringSection />

      <!-- SERVICE SECTION -->
      <InvoiceServiceSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getB2BInvoicingPage?.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InvoiceHeroSection from "@/modules/landing-v2/components/invoicing/invoice-hero-section";

export default {
  name: "InvoicingPage",

  components: {
    InvoiceHeroSection,
    InvoiceBillingSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-billing-section"
      ),
    InvoiceTailoringSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-tailoring-section"
      ),
    InvoiceServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-invoice-v2" */ "@/modules/landing-v2/components/invoicing/invoice-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getB2BInvoicingPage: "cms/getB2BInvoicingPage" }),
  },

  async mounted() {
    if (!this.getB2BInvoicingPage) await this.fetchB2BInvoicingPage();
  },

  methods: {
    ...mapActions({ fetchB2BInvoicingPage: "cms/fetchB2BInvoicingPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
