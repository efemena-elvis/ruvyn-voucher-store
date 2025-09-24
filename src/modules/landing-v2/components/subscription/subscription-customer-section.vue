<template>
  <div class="subscription-customer-section item-listing-section">
    <div class="vesicash-container">
      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="(benefit, index) in section.benefits"
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
  name: "SubscriptionCustomerSection",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getSubscriptionPage: "cms/getSubscriptionPage" }),

    section() {
      return this.getSubscriptionPage?.secondary_hero_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscription-customer-section {
  padding: 0 0 toRem(110);

  @include breakpoint-down(sm) {
    padding: 0 0 toRem(80);
  }
}
</style>
