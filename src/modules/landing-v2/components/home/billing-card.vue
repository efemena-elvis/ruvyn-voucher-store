<template>
  <div class="billing-card">
    <!-- ICON SECTION -->
    <div
      class="icon-section neutral-10-bg mgb-24 rounded-circle"
      :class="has_border && 'icon-border'"
    >
      <img v-lazy="icon" :alt="`${icon} logo`" />
    </div>

    <!-- TITLE SECTION -->
    <div class="title-section grey-900 mgb-8 roobert-700">
      {{ title }}
    </div>

    <!-- DESCRIPTION SECTION -->
    <div class="description-section grey-700 roobert-400">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoDisplayCard",

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
    has_border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.billing-card {
  margin: toRem(30) 0;

  @include breakpoint-down(md) {
    margin: toRem(15) 0;
  }

  .icon-section {
    position: relative;
    @include draw-shape(70);

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
    @include font-height(22.5, 30);
    padding-right: toRem(10);

    @include breakpoint-down(sm) {
      font-size: toRem(22);
    }
  }

  .description-section {
    @include font-height(18.5, 28);
    padding-right: toRem(15);

    @include breakpoint-down(lg) {
      font-size: toRem(18);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(18);
    }
  }

  .icon-border {
    border: toRem(2) solid getColor("grey-100");
  }
}
</style>
