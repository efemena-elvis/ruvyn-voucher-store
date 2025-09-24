<template>
  <div
    class="pricing-feature-card border-grey-100 rounded-16 overflow-hidden"
    :class="getCardTheme"
  >
    <!-- COPY SECTION -->
    <div class="copy-section">
      <slot name="copy-section"></slot>
    </div>

    <!-- FEATURE SECTION -->
    <div class="feature-section">
      <div class="title-text h4-text roobert-700 mgb-28">
        Features for your business
      </div>

      <div class="feature-section-list">
        <div
          class="feature-item"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="icon-wrapper">
            <SuccessIcon
              :backgroundColor="theme === 'dark' ? '#24acee' : '#3AB75D'"
            />
          </div>

          <div class="text roobert-400">
            {{ feature }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingFeatureCard",

  components: {
    SuccessIcon: () =>
      import(
        /* webpackChunkName: 'shared-module' */ "@/shared/components/icon-comps/success-icon"
      ),
  },

  props: {
    theme: {
      type: String,
    },

    features: {
      type: Array,
    },
  },

  computed: {
    getCardTheme() {
      return `${this.theme}-theme`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pricing-feature-card {
  @include flex-row-between-wrap;
  height: toRem(420);

  @include breakpoint-down(md) {
    height: auto;
    overflow: unset;
  }

  .copy-section,
  .feature-section {
    position: relative;
    padding: toRem(40);
    width: 50%;
    height: 100%;

    @include breakpoint-down(lg) {
      padding: toRem(30);
    }

    @include breakpoint-down(md) {
      padding: toRem(25) toRem(22);
      width: 100%;
    }

    .title-text {
      @include breakpoint-down(lg) {
        @include font-height(23, 30);
      }

      @include breakpoint-down(sm) {
        @include font-height(22, 28);
      }
    }

    .feature-section-list {
      @include breakpoint-down(lg) {
        width: 100%;
      }

      .feature-item {
        @include breakpoint-down(lg) {
          margin-bottom: toRem(14);
        }

        .icon-wrapper {
          @include breakpoint-down(lg) {
            margin-right: toRem(14);
            top: toRem(3);
          }
        }

        .text {
          @include breakpoint-down(lg) {
            @include font-height(18, 28);
          }

          @include breakpoint-down(sm) {
            @include font-height(17.5, 26);
          }
        }
      }
    }
  }

  .copy-section {
    @include breakpoint-down(md) {
      height: toRem(380);
    }

    @include breakpoint-down(sm) {
      height: toRem(400);
    }
  }
}

.light-theme {
  color: getColor("grey-900");

  .feature-section {
    background: getColor("green-50");
  }
}

.dark-theme {
  color: getColor("neutral-10");

  .copy-section {
    background: getColor("teal-900");
  }

  .feature-section {
    background: getColor("teal-800");
  }
}
</style>
