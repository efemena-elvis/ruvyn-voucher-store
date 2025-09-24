<template>
  <div class="container-layout">
    <template v-if="getFundTransfersPage">
      <Breadcrumb :links="getFundTransfersPage.breadcrumb" />

      <!-- HERO SECTION -->
      <TransferHeroSection />

      <!-- SERVICE SECTION -->
      <TransferServiceSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getFundTransfersPage?.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Breadcrumb from "../components/breadcrumb.vue";
import TransferHeroSection from "@/modules/landing-v2/components/fund-transfer/transfer-hero-section";

export default {
  name: "FundTransfer",

  components: {
    Breadcrumb,
    TransferHeroSection,
    TransferServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-transfer-v2" */ "@/modules/landing-v2/components/fund-transfer/transfer-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getFundTransfersPage: "cms/getFundTransfersPage" }),
  },

  async mounted() {
    if (!this.getFundTransfersPage) await this.fetchFundTransfersPage();
  },

  methods: {
    ...mapActions({ fetchFundTransfersPage: "cms/fetchFundTransfersPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
