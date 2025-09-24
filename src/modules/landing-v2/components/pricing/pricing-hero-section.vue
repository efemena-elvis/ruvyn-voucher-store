<template>
  <div class="pricing-hero-section">
    <div class="content-wrapper vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h1-text roobert-700 text-center mgb-24 grey-900">
        Our plans and pricing
      </div>

      <!-- DESCRIPTION TEXT -->
      <div class="description-text h6-text roobert-400 text-center grey-700">
        Manage your payments, billing, tax compliance, and additional services
        all included in one package. No additional charges, no undisclosed fees.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingHeroSection",
};
</script>

<style lang="scss" scoped>
.pricing-hero-section {
  padding: toRem(100) 0 toRem(100);

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(80);
  }

  .content-wrapper {
    @include flex-column-center;

    .title-text {
      @include breakpoint-down(lg) {
        @include font-height(50, 60);
      }

      @include breakpoint-down(md) {
        @include font-height(42, 56);
      }

      @include breakpoint-down(sm) {
        @include font-height(40, 54);
      }

      @include breakpoint-down(xs) {
        @include font-height(38, 50);
      }
    }

    .description-text {
      width: 85%;

      @include breakpoint-down(lg) {
        @include font-height(22, 32);
      }

      @include breakpoint-down(md) {
        @include font-height(22, 32);
        width: 95%;
      }

      @include breakpoint-down(sm) {
        @include font-height(19.5, 32);
        width: 100%;
      }

      @include breakpoint-down(xs) {
        @include font-height(19, 32);
      }
    }
  }
}
</style>
