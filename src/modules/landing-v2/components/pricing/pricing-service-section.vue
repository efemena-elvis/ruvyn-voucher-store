<template>
  <div class="pricing-service-section item-listing-section teal-50-bg">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">
        Features in your plan
      </div>

      <!-- PAYOUT CARD ROW -->
      <div class="payout-card-row row">
        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="bang-icon.svg"
            title="Checkout"
            description="Seamless payment process with superior performance that you can integrate directly into your website or application."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="business-icon.svg"
            title="Subscriptions"
            description="Effectively manage and enhance subscription billing, all within a unified platform."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="stack-icon.svg"
            title="Billing Support"
            description="We address customer inquiries regarding payments, subscriptions, and cancellation requests."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="wallet-icon.svg"
            title="Payment"
            description="Multiple currencies, payment options needed to grow your revenue."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="certified-icon.svg"
            title="Tax and Compliance"
            description="Complete compliance with sales tax regulations, international laws, and payment standards."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="certified-icon.svg"
            title="Migration Support"
            description="Migrate without jeopardizing the safety of subscribers during the process."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="stack-icon.svg"
            title="Reporting"
            description="A singular, dependable source of truth for comprehensive financial and management reporting."
            has_border
            is_local_icon
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <InfoDisplayCard
            icon="transaction-icon.svg"
            title="Customer Support"
            description="Receive expert guidance on utilizing Vesicash, allowing you to concentrate on your business's expansion."
            has_border
            is_local_icon
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "PricingServiceSection",

  components: {
    InfoDisplayCard,
  },
};
</script>

<style lang="scss" scoped></style>
