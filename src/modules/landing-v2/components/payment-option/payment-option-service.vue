<template>
  <div class="payment-option-service item-listing-section">
    <div class="vesicash-container">
      <div
        :class="
          getPaymentOptionsPage?.benefits_section?.row_type
            ? 'row row-gap-0'
            : ''
        "
      >
        <div
          :class="
            getPaymentOptionsPage?.benefits_section?.row_type
              ? 'col-12 col-md-4 mb-0'
              : ''
          "
        >
          <!-- TITLE TEXT -->
          <div class="title-text h2-text roobert-700 grey-900">
            {{ getPaymentOptionsPage?.benefits_section?.title }}
          </div>
        </div>

        <div
          :class="
            getPaymentOptionsPage?.benefits_section?.row_type
              ? 'col-12 col-md-8 mb-0'
              : ''
          "
        >
          <!-- PAYOUT CARD ROW -->
          <div class="payout-card-row row">
            <div
              class="col-12 col-md-6"
              v-for="(service, index) in getPaymentOptionsPage?.benefits_section
                ?.benefits"
              :key="index"
            >
              <InfoDisplayCard
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
                has_border
              />
            </div>
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
  name: "PaymentOptionService",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getPaymentOptionsPage: "cms/getPaymentOptionsPage" }),
  },
};
</script>

<style lang="scss" scoped>
.payment-option-service {
  min-height: 100vh;
  .title-text {
    width: 80%;

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }
  }
}
</style>
