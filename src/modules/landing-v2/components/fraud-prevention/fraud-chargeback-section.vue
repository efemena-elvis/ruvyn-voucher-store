<template>
  <div class="fraud-chargeback-section two-column-section teal-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ getFraudPreventionPage?.listed_benefit_section?.title }}
          </div>

          <h5 class="description-text h7-text roobert-400 grey-700 mgb-40">
            {{ getFraudPreventionPage?.listed_benefit_section?.description }}
          </h5>

          <!-- FEATURES LIST -->
          <div class="feature-section-list">
            <div
              class="feature-item"
              v-for="(feature, index) in getFraudPreventionPage
                ?.listed_benefit_section?.benefits"
              :key="index"
            >
              <div class="icon-wrapper">
                <SuccessIcon />
              </div>

              <div class="text roobert-400 grey-700">
                {{ feature }}
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('fraud-img-two.png', 'landing-v2')"
              alt="Fraud Prevention"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FraudChargebackSection",

  components: {
    SuccessIcon: () =>
      import(
        /* webpackChunkName: 'shared-module' */ "@/shared/components/icon-comps/success-icon"
      ),
  },

  computed: {
    ...mapGetters({ getFraudPreventionPage: "cms/getFraudPreventionPage" }),
  },

  data() {
    return {
      features: [
        "We aid in disputing chargebacks and provide evidence to validate legitimate transactions with card issuers.",
        "We handle chargebacks to protect your revenue from false or fraudulent claims.",
        "We offer guidance to prevent chargebacks, educating you on best practices. ",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fraud-chargeback-section {
  .content-wrapper {
    .copy-content {
      .description-text {
        @include font-height(21, 32);
        width: 90%;

        @include breakpoint-down(lg) {
          font-size: toRem(18);
        }

        @include breakpoint-down(sm) {
          font-size: toRem(16);
        }
      }
    }
  }
}
</style>
