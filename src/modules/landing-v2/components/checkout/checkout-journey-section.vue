<template>
  <div class="checkout-journey-section two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ section.title }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ section.description }}
          </h5>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-end">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('checkout-img-two.png', 'landing-v2')"
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
  name: "CheckoutJourneySection",

  computed: {
    ...mapGetters({ getCheckoutPage: "cms/getCheckoutPage" }),

    section() {
      return this.getCheckoutPage?.secondary_hero_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-journey-section {
  .content-wrapper {
    .copy-content {
      padding-right: toRem(30);

      .description-text {
        width: 90%;
      }
    }

    .image-section {
      width: 90%;
    }
  }
}
</style>
