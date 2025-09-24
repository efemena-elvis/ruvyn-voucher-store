<template>
  <div class="mor-info-card">
    <!-- ICON SECTION -->
    <div class="icon-section neutral-10-bg mgb-24">
      <component :is="icon" />
    </div>

    <!-- TITLE SECTION -->
    <div class="title-section h6-text neutral-10 mgb-8 roobert-700">
      {{ title }}
    </div>

    <!-- DESCRIPTION SECTION -->
    <div class="description-section h7-text neutral-10 roobert-400">
      {{ description }}
    </div>
  </div>
</template>

<script>
import ClockIcon from "@/shared/components/icon-comps/clock-icon";
import BangIcon from "@/shared/components/icon-comps/bang-icon";
import GlobeIcon from "@/shared/components/icon-comps/globe-icon";

export default {
  name: "MoRInfoDisplayCard",

  components: {
    ClockIcon,
    BangIcon,
    GlobeIcon,
  },

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
.mor-info-card {
  .icon-section {
    position: relative;
    border-radius: toRem(18);
    @include draw-shape(70);

    @include breakpoint-down(sm) {
      @include draw-shape(65);
    }

    svg {
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
    padding-right: toRem(20);

    @include breakpoint-down(lg) {
      font-size: toRem(18);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(18.5);
    }
  }
}
</style>
