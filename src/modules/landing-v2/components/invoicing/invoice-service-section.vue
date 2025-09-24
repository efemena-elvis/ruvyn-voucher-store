<template>
  <div class="invoice-service-section item-listing-section">
    <div class="vesicash-container">
      <div class="row">
        <div class="col-12 col-md-4">
          <!-- TITLE TEXT -->
          <div class="title-text h2-text roobert-700 grey-900">
            {{ section.title }}
          </div>
        </div>

        <div class="col-12 col-md-8">
          <!-- PAYOUT CARD ROW -->
          <div class="payout-card-row row">
            <div class="col-12 col-sm-6">
              <InfoDisplayCard
                icon="clock-icon.svg"
                title="Efficiency"
                description="Streamline billing processes, saving time and resources."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-sm-6">
              <InfoDisplayCard
                icon="automate-icon.svg"
                title="Automation"
                description="Automate invoicing tasks for consistent and timely billing."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-sm-6">
              <InfoDisplayCard
                icon="cash-icon.svg"
                title="Payment tracking"
                description="Monitor invoice status and receive payments promptly."
                has_border
                is_local_icon
              />
            </div>

            <div class="col-12 col-sm-6">
              <InfoDisplayCard
                icon="bang-icon.svg"
                title="Compliance"
                description="Ensure adherence to tax and regulatory requirements."
                has_border
                is_local_icon
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
  name: "InvoiceServiceSection",

  components: {
    InfoDisplayCard,
  },

  computed: {
    ...mapGetters({ getB2BInvoicingPage: "cms/getB2BInvoicingPage" }),

    section() {
      return this.getB2BInvoicingPage?.benefits_section;
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-service-section {
  .title-text {
    width: 80%;

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }
  }
}
</style>
