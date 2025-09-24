<template>
  <div class="two-column-section">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title-text h2-text grey-900 roobert-700 mgb-24">
            {{ section?.title }}
          </div>

          <h5 class="description-text h6-text roobert-400 grey-700">
            {{ section?.description }}
          </h5>
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('subscription-img-one.png', 'landing-v2')"
              alt="Subscription Service"
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
  name: "SubscriptionProductSection",

  computed: {
    ...mapGetters({ getSubscriptionPage: "cms/getSubscriptionPage" }),

    section() {
      return this.getSubscriptionPage?.secondary_hero_section;
    },
  },
};
</script>

<style lang="scss" scoped></style>
