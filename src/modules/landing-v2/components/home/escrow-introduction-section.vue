<template>
  <div class="escrow-introduction teal-50-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="top-section row align-items-center">
        <div class="col-12 col-md-6 copy-content">
          <div class="title secondary-1-text green-500 mgb-8 roobert-500">
            {{ getHomePage.escrow_title }}
          </div>

          <div class="description h2-text grey-900 roobert-700 mgb-40">
            {{ getHomePage.escrow_description }}
          </div>

          <a
            class="btn btn-lg btn-primary roobert-500"
            href="https://app.vesicash.com/register-lander"
            target="_blank"
            >{{ getHomePage.labels.sign_up_cta_title }}</a
          >
        </div>

        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('product-img.png', 'landing')"
              alt="Vesicash Escrow"
              class="wt-100"
            />
          </div>
        </div>
      </div>

      <!-- BOTTOM SECTION -->
      <div class="bottom-section">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4"
            v-for="(benefit, i) in getHomePage.escrow_benefits"
            :key="i"
          >
            <InfoDisplayCard
              :icon="benefit.icon"
              :title="benefit.title"
              :description="benefit.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "EscrowIntroductionSection",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },
};
</script>

<style lang="scss" scoped>
.escrow-introduction {
  padding: toRem(100) 0;

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0 toRem(80);
  }

  .content-wrapper {
    .top-section {
      margin-bottom: toRem(100);

      @include breakpoint-down(sm) {
        margin-bottom: toRem(70);
      }

      .copy-content {
        padding: toRem(40);

        @include breakpoint-down(md) {
          padding: toRem(15);
          margin-bottom: toRem(40);
        }

        .title {
          letter-spacing: toRem(1);

          @include breakpoint-down(lg) {
            font-size: toRem(14.5);
          }

          @include breakpoint-down(sm) {
            font-size: toRem(12);
          }
        }

        .description {
          @include breakpoint-down(lg) {
            font-size: toRem(36);
          }

          @include breakpoint-down(sm) {
            @include font-height(32, 42);
          }
        }

        .btn {
          padding: toRem(14) toRem(46);
          width: max-content;
        }
      }
    }

    .bottom-section {
      .col-12 {
        @include breakpoint-down(md) {
          margin-bottom: toRem(44);

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
