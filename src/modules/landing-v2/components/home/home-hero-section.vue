<template>
  <div class="hero-container">
    <div class="content-wrapper vesicash-container">
      <div>
        <div class="hero-title h1-text grey-900 mgb-24 roobert-700">
          {{ getHomePage.hero_title }}
        </div>

        <div class="hero-description h6-text grey-700 roobert-400 mgb-40">
          {{ getHomePage.hero_description }}
        </div>

        <a
          class="btn btn-lg btn-primary roobert-500"
          href="https://app.vesicash.com/register-lander"
          target="_blank"
          >{{ getHomePage.labels.sign_up_cta_title }}</a
        >
      </div>

      <div class="hero-img-wrapper">
        <MoRGlobe />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MoRGlobe from "@/shared/components/icon-comps/mor-globe";

export default {
  name: "HomeHeroSection",

  components: {
    MoRGlobe,
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  background: getColor("neutral-10");
  padding-top: toRem(130);
  padding-bottom: toRem(150);
  height: auto;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: toRem(100);

    @include breakpoint-down(lg) {
      gap: toRem(40);
    }

    @include breakpoint-down(md) {
      grid-template-columns: 100%;
    }

    .hero-title {
      @include breakpoint-down(xl) {
        @include font-height(52, 58);
      }

      @include breakpoint-down(lg) {
        @include font-height(46, 54);
      }

      @include breakpoint-down(md) {
        @include font-height(48, 54);
        text-align: center;
      }

      @include breakpoint-down(sm) {
        @include font-height(42, 54);
      }
    }

    .hero-description {
      @include breakpoint-down(xl) {
        @include font-height(20, 28);
      }

      @include breakpoint-down(md) {
        text-align: center;
        width: 80%;
        margin: 0 auto;
      }

      @include breakpoint-down(sm) {
        @include font-height(19, 28);
        width: 90%;
      }
    }

    .btn {
      padding: toRem(13) toRem(42);
      width: max-content;

      @include breakpoint-down(md) {
        margin: 0 auto;
      }
    }

    .hero-img-wrapper {
      @include breakpoint-down(md) {
        @include flex-row-center-nowrap;
        margin-top: toRem(40);
      }

      svg {
        width: toRem(520);
        height: toRem(420);

        @include breakpoint-down(xl) {
          width: toRem(450);
          height: toRem(380);
        }

        @include breakpoint-down(lg) {
          width: toRem(420);
          height: toRem(350);
        }
      }
    }
  }
}
</style>
