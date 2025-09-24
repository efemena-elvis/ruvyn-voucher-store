<template>
  <div class="mor-introduction teal-900-bg">
    <div class="content-wrapper vesicash-container">
      <!-- TOP SECTION -->
      <div class="top-section row align-items-center">
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('mor-frame.png', 'landing-v2')"
              alt="merchant-of-record-introductory"
              class="wt-100"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 copy-content">
          <div class="title secondary-1-text green-500 mgb-16 roobert-500">
            {{ getHomePage.mor_title }}
          </div>

          <div class="description h2-text neutral-10 roobert-700 mgb-16">
            {{ getHomePage.vesicash_mor }}
          </div>

          <div class="meta h7-text roobert-400 neutral-10 mgb-25">
            {{ getHomePage.why_vesicash_mor }}
          </div>

          <!-- FEATURES LIST -->
          <div class="feature-list">
            <div
              class="feature-item"
              v-for="(feature, index) in getHomePage.mor_services"
              :key="index"
            >
              <div class="icon-wrapper">
                <SuccessIcon />
              </div>

              <div class="text tertiary-1-text roobert-400 neutral-10">
                {{ feature }}
              </div>
            </div>
          </div>
          <div class="meta h7-text roobert-400 neutral-10 mgt-25">
            {{ getHomePage.mor_extra_benefit }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MoRInfoCard from "@/modules/landing-v2/components/home/mor-info-card";

export default {
  name: "MoRIntroductionSection",

  components: {
    MoRInfoCard,
    SuccessIcon: () =>
      import(
        /* webpackChunkName: 'shared-module' */ "@/shared/components/icon-comps/success-icon"
      ),
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },

  data() {
    return {
      features: [
        "Building and maintaining relationships with payment providers.",
        "Shouldering the responsibility of collecting and remitting global sales taxes.",
        "Managing and taking responsibility for all fraud that takes place on our platform.",
        "Aligning your revenue data across various billing and payment methods.",
        "Handling all billing-related support queries for you.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mor-introduction {
  padding: toRem(100) 0;

  @include breakpoint-down(md) {
    padding: toRem(90) 0 toRem(80);
  }

  @include breakpoint-down(sm) {
    padding: toRem(60) 0;
  }

  .content-wrapper {
    .top-section {
      .copy-content {
        padding-left: toRem(80);

        @include breakpoint-down(lg) {
          padding-left: toRem(50);
        }

        @include breakpoint-down(md) {
          padding: toRem(15);
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
            font-size: toRem(32);
          }
        }

        .meta {
          @include breakpoint-down(lg) {
            font-size: toRem(18);
          }

          @include breakpoint-down(sm) {
            font-size: toRem(16);
          }
        }

        .feature-list {
          @include flex-row-start-wrap;
          align-items: flex-start;
          width: 90%;

          .feature-item {
            @include flex-row-start-nowrap;
            align-items: center;
            margin-bottom: toRem(16);

            &:last-of-type {
              margin-bottom: 0;
            }

            .icon-wrapper {
              margin-right: toRem(16);
            }

            .text {
              @include breakpoint-down(md) {
                font-size: toRem(15);
              }
            }
          }
        }
      }
    }
  }

  .image-section {
    @include breakpoint-down(md) {
      margin-bottom: toRem(60);
    }

    @include breakpoint-down(sm) {
      margin-bottom: toRem(40);
    }
  }
}
</style>
