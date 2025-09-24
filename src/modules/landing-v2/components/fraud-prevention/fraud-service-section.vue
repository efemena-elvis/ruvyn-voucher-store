<template>
  <div class="fraud-service-section item-listing-section neutral-10-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        {{ getFraudPreventionPage?.benefits_section?.title }}
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="(benefit, index) in getFraudPreventionPage?.benefits_section
            ?.benefits"
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
</template>

<script>
import { mapGetters } from "vuex";

import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "FraudServiceSection",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getFraudPreventionPage: "cms/getFraudPreventionPage" }),
  },
};
</script>

<style lang="scss" scoped></style>
