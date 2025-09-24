<template>
  <div class="tax-hero-section two-column-section teal-900-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text teal-500 mgb-8 roobert-500">
            {{ getTaxCompliancePage?.hero_section?.title }}
          </div>

          <div class="title-text h2-text neutral-10 roobert-700 mgb-24">
            {{ getTaxCompliancePage?.hero_section?.subtitle }}
          </div>

          <h5 class="description-text h6-text roobert-400 neutral-10">
            {{ getTaxCompliancePage?.hero_section?.description }}
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('tax-hero-img.png', 'landing-v2')"
              alt="Tax Compliance"
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
  name: "TaxHeroSection",

  computed: {
    ...mapGetters({ getTaxCompliancePage: "cms/getTaxCompliancePage" }),
  },
};
</script>

<style lang="scss" scoped></style>
