<template>
  <div class="payout-card neutral-10-bg">
    <!-- ICON SECTION -->
    <div class="icon-section border-grey-100 mgb-24">
      <img v-lazy="loadImage(icon, 'landing-v2')" :alt="`${icon} logo`" />
    </div>

    <!-- TITLE SECTION -->
    <div class="title-section h6-text grey-900 mgb-8 roobert-700">
      {{ title }}
    </div>

    <!-- DESCRIPTION SECTION -->
    <div class="description-section h7-text grey-700 roobert-400">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PayoutCard",

  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.payout-card {
  border-radius: toRem(24);
  padding: toRem(24);
  height: toRem(310);

  @include breakpoint-down(md) {
    height: auto;
  }

  .icon-section {
    border: toRem(2) solid getColor("grey-100");
    border-radius: toRem(18);
    @include draw-shape(70);
    position: relative;

    @include breakpoint-down(sm) {
      @include draw-shape(65);
    }

    img {
      @include center-placement;

      @include breakpoint-down(sm) {
        @include draw-shape(38);
      }
    }
  }

  .title-section {
    @include breakpoint-down(sm) {
      font-size: toRem(22);
    }
  }

  .description-section {
    @include breakpoint-down(lg) {
      font-size: toRem(18);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(18.5);
    }
  }
}
</style>
