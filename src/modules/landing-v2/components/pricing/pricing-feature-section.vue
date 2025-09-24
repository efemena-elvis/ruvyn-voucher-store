<template>
  <div class="pricing-feature-section">
    <div class="vesicash-container">
      <div class="card-wrapper">
        <PricingFeatureCard theme="light" :features="basic_features">
          <template slot="copy-section">
            <div class="copy-text-title h2-text roobert-700 grey-900">
              Pay as you go
            </div>

            <div class="copy-area">
              <div class="copy-area-header h2-text green-600 roobert-700">
                1.5% + $1
              </div>

              <div class="copy-area-body h7-text roobert-400 grey-700">
                per checkout transaction
              </div>
            </div>

            <a
              href="https://app.vesicash.com/register-lander"
              target="_blank"
              class="btn btn-primary"
              >Create account</a
            >
          </template>
        </PricingFeatureCard>
      </div>

      <div class="card-wrapper">
        <PricingFeatureCard theme="dark" :features="custom_features">
          <template slot="copy-section">
            <div class="copy-text-title h2-text roobert-700 teal-500">
              Custom
            </div>

            <div class="copy-area">
              <div class="copy-area-body h7-text roobert-400 neutral-10">
                <p>
                  Customized pricing solutions for rapidly expanding startups
                  and firmly established large-scale enterprises.
                </p>

                <p>
                  For products priced below $10 or if you require invoicing.
                </p>
              </div>
            </div>

            <router-link to="/contact" class="btn btn-secondary"
              >Reach out to support</router-link
            >
          </template>
        </PricingFeatureCard>
      </div>
    </div>
  </div>
</template>

<script>
import PricingFeatureCard from "@/modules/landing-v2/components/pricing/pricing-feature-card";

export default {
  name: "PricingFeatureSection",

  components: {
    PricingFeatureCard,
  },

  data() {
    return {
      basic_features: [
        "Global payments and billing seamlessly unified in one platform.",
        "Cross-border sales tax compliance.",
        "Protection against fraud and chargebacks.",
        "No migration fees, monthly fees, or hidden extras.",
      ],

      custom_features: [
        "Custom pricing to fit your business model and products.",
        "Get access to optional premium services and success management.",
        "Custom migration services and implementation support.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pricing-feature-section {
  padding-bottom: toRem(40);

  .card-wrapper {
    margin-bottom: toRem(60);

    .copy-text-title {
      margin-bottom: toRem(40);

      @include breakpoint-down(lg) {
        @include font-height(30, 38);
      }

      @include breakpoint-down(sm) {
        @include font-height(28, 38);
        margin-bottom: toRem(20);
      }
    }

    .copy-area {
      .copy-area-header {
        @include breakpoint-down(lg) {
          @include font-height(34, 44);
        }

        @include breakpoint-down(sm) {
          @include font-height(32, 44);
        }
      }

      .copy-area-body {
        @include breakpoint-down(lg) {
          @include font-height(18, 28);
        }
      }
    }

    .btn {
      font-size: toRem(18);
      padding: toRem(16);
      position: absolute;
      bottom: toRem(40);
      width: 86%;

      @include breakpoint-down(md) {
        width: 88%;
      }

      @include breakpoint-down(sm) {
        width: 86%;
      }

      @include breakpoint-down(xs) {
        width: 84%;
      }
    }
  }
}
</style>
