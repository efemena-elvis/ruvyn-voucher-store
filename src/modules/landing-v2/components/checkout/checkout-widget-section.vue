<template>
  <div class="checkout-widget-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative">
            <img
              v-lazy="loadImage('checkout-img-one.png', 'landing-v2')"
              alt="Checkout Widget"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text green-500 mgb-8 roobert-500">
            {{ section.title }}
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ section.subtitle }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ section.description }}
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
    ...mapGetters({ getCheckoutPage: "cms/getCheckoutPage" }),

    section() {
      return this.getCheckoutPage?.hero_section_ii;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-widget-section {
  .content-wrapper {
    .copy-content {
      padding-left: toRem(15);

      @include breakpoint-down(md) {
        padding-left: toRem(15);
        margin-bottom: 0;
      }

      .description-text {
        width: 95%;
      }
    }

    .image-section {
      width: 96%;

      @include breakpoint-down(md) {
        margin-bottom: toRem(80);
      }
    }
  }
}
</style>
