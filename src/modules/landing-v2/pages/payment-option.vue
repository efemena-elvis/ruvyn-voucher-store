<template>
  <div class="container-layout">
    <template v-if="getPaymentOptionsPage">
      <Breadcrumb :links="getPaymentOptionsPage.breadcrumb" />

      <!-- HERO SECTION -->
      <PaymentOptionHero />

      <!-- SERVICE SECTION -->
      <PaymentOptionService />

      <!-- CALL TO ACTION SECTION -->
      <CallToActionSection :data="getPaymentOptionsPage.onboarding" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PaymentOptionHero from "@/modules/landing-v2/components/payment-option/payment-option-hero";
import Breadcrumb from "../components/breadcrumb.vue";

export default {
  name: "PaymentOption",

  metaInfo() {
    return {
      ...this.pageMeta,
    };
  },

  components: {
    PaymentOptionHero,
    Breadcrumb,
    PaymentOptionService: () =>
      import(
        /* webpackChunkName: "landing-module-payment-v2" */ "@/modules/landing-v2/components/payment-option/payment-option-service"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing-v2/components/home/call-to-action-section"
      ),
  },

  computed: {
    ...mapGetters({ getPaymentOptionsPage: "cms/getPaymentOptionsPage" }),

    pageMeta() {
      if (!this.getPaymentOptionsPage) return {};

      return {
        title: "Vesicash",
        titleTemplate: `%s | ${this.getPaymentOptionsPage?.meta?.title}`,

        htmlAttrs: {
          lang: "en-US",
        },

        meta: [
          { charset: "utf-8" },
          {
            name: "description",
            content: this.getPaymentOptionsPage?.meta?.description,
          },
          {
            name: "keywords",
            content: this.getPaymentOptionsPage?.meta?.keywords,
          },
          {
            name: "tags",
            content: this.getPaymentOptionsPage?.meta?.tags,
          },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
      };
    },
  },

  async mounted() {
    if (!this.getPaymentOptionsPage) await this.fetchPaymentOptionsPage();
  },

  methods: {
    ...mapActions({ fetchPaymentOptionsPage: "cms/fetchPaymentOptionsPage" }),
  },
};
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
}
</style>
