<template>
  <div class="payment-section green-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text primary-1-text roobert-500 mgb-8 green-800">
        {{ getHomePage.payment_title }}
      </div>

      <div class="description-text grey-900 h2-text roobert-700 mgb-16">
        {{ getHomePage.payment_subtitle }}
      </div>

      <div class="meta-text h7-text grey-700 roobert-400 mgb-20">
        {{ getHomePage.payment_description }}
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payment-card-row row">
        <div
          class="col-12 col-sm-6 col-md-3"
          v-for="(card, i) in getHomePage.payment_services"
          :key="i"
        >
          <BillingCard
            :icon="card.icon"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BillingCard from "@/modules/landing-v2/components/home/billing-card";

export default {
  name: "PaymentSection",

  components: {
    BillingCard,
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },
};
</script>

<style lang="scss" scoped>
.payment-section {
  padding: toRem(100) 0 toRem(70);

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
  @include breakpoint-down(sm) {
    padding: toRem(60) 0;
  }

  .title-text {
    letter-spacing: toRem(1);

    @include breakpoint-down(lg) {
      font-size: toRem(14.5);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(12);
    }
  }

  .description-text {
    @include breakpoint-down(lg) {
      font-size: toRem(36);
    }

    @include breakpoint-down(sm) {
      font-size: toRem(32);
    }
  }

  .meta-text {
    line-height: toRem(30);
    width: 30%;

    @include breakpoint-down(lg) {
      width: 50%;
      font-size: toRem(18);
    }

    @include breakpoint-down(sm) {
      width: 100%;
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
