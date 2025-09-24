<template>
  <div class="market-section neutral-10-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        We enable your business reach a wider market
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="globe-icon.svg"
            title="Global reach"
            description="Vesicash enables businesses to accept payments from their customers worldwide with ease"
            has_border
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="credit-cliq-icon.svg"
            title="Scalability"
            description="Accommodating business growth and higher transaction volumes without disruptions"
            has_border
          />
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <InfoDisplayCard
            icon="user-icon.svg"
            title="Customer satisfaction"
            description="We are focused on enhancing payment experience, leading to increased customer loyalty"
            has_border
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "MarketFeatureSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped>
.market-section {
  padding: toRem(100) 0;

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
  @include breakpoint-down(sm) {
    padding: toRem(60) 0;
  }

  .title-text {
    margin-bottom: toRem(60);
    width: 50%;

    @include breakpoint-down(lg) {
      @include font-height(38, 44);
      width: 70%;
    }

    @include breakpoint-down(md) {
      @include font-height(34, 42);
      width: 95%;
    }
  }

  .col-12 {
    @include breakpoint-down(md) {
      margin-bottom: toRem(44);

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
