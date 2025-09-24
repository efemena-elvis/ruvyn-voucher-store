<template>
  <div class="tax-collection two-column-section neutral-10-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative">
            <img
              v-lazy="loadImage('tax-img-one.png', 'landing-v2')"
              alt="Fraud Prevention"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ getTaxCompliancePage?.listed_benefit_section?.title }}
          </div>

          <h5 class="description-text h7-text roobert-400 grey-700 mgb-40">
            {{ getTaxCompliancePage?.listed_benefit_section?.description }}
          </h5>

          <!-- FEATURES LIST -->
          <div class="feature-section-list">
            <div
              class="feature-item"
              v-for="(feature, index) in getTaxCompliancePage
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TaxCollection",

  components: {
    SuccessIcon: () =>
      import(
        /* webpackChunkName: 'shared-module' */ "@/shared/components/icon-comps/success-icon"
      ),
  },

  computed: {
    ...mapGetters({ getTaxCompliancePage: "cms/getTaxCompliancePage" }),
  },

  data() {
    return {
      features: [
        "Ensure accurate tax collection across regions.",
        "Automatically register per region.",
        "Handle filing and payments automatically in all regions.",
        "Stay compliant with regulatory changes via automatic update",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tax-collection {
  .content-wrapper {
    .image-section {
      width: 90%;
    }

    .copy-content {
      padding: 0 !important;

      @include breakpoint-down(md) {
        padding: 0 toRem(15) !important;
        margin-bottom: 0;
      }

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

    .image-section {
      @include breakpoint-down(md) {
        margin-bottom: toRem(80);
      }
    }
  }
}
</style>
