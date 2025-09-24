<template>
  <div class="checkout-hero-section two-column-section yellow-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="meta-text secondary-1-text yellow-700 mgb-8 roobert-500">
            {{ section.title }}
          </div>

          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ section.subtitle }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ section.description }}
          </h5>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div class="image-section position-relative">
            <img
              v-lazy="loadImage('checkout-hero-img.png', 'landing-v2')"
              alt="Checkout payment"
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
  name: "CheckoutHeroSection",

  computed: {
    ...mapGetters({ getCheckoutPage: "cms/getCheckoutPage" }),

    section() {
      return this.getCheckoutPage?.hero_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-hero-section {
  .content-wrapper {
    .copy-content {
      padding-right: toRem(30);

      .description-text {
        width: 95%;
      }
    }

    .image-section {
      width: 94%;
    }
  }
}
</style>
