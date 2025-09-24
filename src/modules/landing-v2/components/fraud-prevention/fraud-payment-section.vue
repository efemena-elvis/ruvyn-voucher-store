<template>
  <div class="fraud-payment-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('fraud-img-one.png', 'landing-v2')"
              alt="Fraud Prevention"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ getFraudPreventionPage?.secondary_hero_section?.title }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ getFraudPreventionPage?.secondary_hero_section?.description }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FraudPaymentSection",

  computed: {
    ...mapGetters({ getFraudPreventionPage: "cms/getFraudPreventionPage" }),
  },
};
</script>

<style lang="scss" scoped>
.fraud-payment-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(60);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
        margin-bottom: 0;
      }
    }

    .image-section {
      @include breakpoint-down(md) {
        margin-bottom: toRem(60);
      }
    }
  }
}
</style>
