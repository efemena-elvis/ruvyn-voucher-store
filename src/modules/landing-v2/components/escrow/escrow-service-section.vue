<template>
  <div class="escrow-service-section item-listing-section green-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        {{ section?.title }}
      </div>

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
  name: "EscrowServiceSection",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getEscrowPage: "cms/getEscrowPage" }),

    section() {
      return this.getEscrowPage?.benefits_section;
    },
  },
};
</script>

<style></style>
