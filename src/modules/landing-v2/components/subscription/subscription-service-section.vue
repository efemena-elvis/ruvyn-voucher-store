<template>
  <div class="subscription-service-section item-listing-section green-50-bg">
    <div class="vesicash-container">
      <div class="row">
        <div class="col-12 col-md-4">
          <!-- TITLE TEXT -->
          <div class="title-text h2-text roobert-700 grey-900">
            {{ section?.title }}
          </div>
        </div>

        <div class="col-12 col-md-8">
          <!-- PAYOUT CARD ROW -->
          <div class="payout-card-row row">
            <div
              class="col-12 col-sm-6"
              v-for="(benefit, index) in section?.benefits"
              :key="index"
            >
              <InfoDisplayCard
                :icon="benefit.icon"
                :title="benefit.title"
                :description="benefit.description"
                has_border
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "SubscriptionService",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getSubscriptionPage: "cms/getSubscriptionPage" }),

    section() {
      return this.getSubscriptionPage?.benefits_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscription-service-section {
  .title-text {
    width: 80%;

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }
  }
}
</style>
