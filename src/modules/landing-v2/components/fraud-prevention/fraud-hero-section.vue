<template>
  <div class="fraud-hero-section green-50-bg two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text green-500 mgb-8 roobert-500">
            {{ getFraudPreventionPage?.hero_section?.title }}
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ getFraudPreventionPage?.hero_section?.subtitle }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ getFraudPreventionPage?.hero_section?.description }}
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('fraud-hero-img.png', 'landing-v2')"
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
  name: "FraudHeroSection",

  computed: {
    ...mapGetters({ getFraudPreventionPage: "cms/getFraudPreventionPage" }),
  },
};
</script>

<style lang="scss" scoped></style>
