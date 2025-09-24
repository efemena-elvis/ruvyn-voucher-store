<template>
  <div class="container-layout">
    <template v-if="getEscrowPage">
      <!-- HERO SECTION -->
      <EscrowHeroSection />

      <!-- VALUE SECTION -->
      <EscrowValueSection />

      <!-- SERVICE SECTION -->
      <EscrowServiceSection />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getEscrowPage.onboarding_section" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EscrowHeroSection from "@/modules/landing-v2/components/escrow/escrow-hero-section";

export default {
  name: "EscrowPage",

  components: {
    EscrowHeroSection,
    EscrowValueSection: () =>
      import(
        /* webpackChunkName: "landing-module-escrow-v2" */ "@/modules/landing-v2/components/escrow/escrow-value-section"
      ),
    EscrowServiceSection: () =>
      import(
        /* webpackChunkName: "landing-module-escrow-v2" */ "@/modules/landing-v2/components/escrow/escrow-service-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getEscrowPage: "cms/getEscrowPage" }),
  },

  async mounted() {
    if (!this.getEscrowPage) await this.fetchEscrowServicePage();
  },

  methods: {
    ...mapActions({ fetchEscrowServicePage: "cms/fetchEscrowServicePage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
