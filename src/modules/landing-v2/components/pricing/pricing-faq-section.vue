<template>
  <div class="pricing-faq-section item-listing-section">
    <div class="vesicash-container">
      <!-- TITLE TEXT -->
      <div class="title-text h2-text roobert-700 grey-900">Pricing FAQs</div>

      <template>
        <FAQCard v-for="(faq, index) in faqs" :key="index" :faq="faq" />
      </template>
    </div>
  </div>
</template>

<script>
import InfoDisplayCard from "@/modules/landing-v2/components/home/info-display-card";

export default {
  name: "PricingFAQSection",

  components: {
    InfoDisplayCard,
    FAQCard: () =>
      import(
        /* webpackChunkName: "landing-module" */ "@/modules/landing/components/faq/faq-card"
      ),
  },

  data: () => ({
    faqs: [
      {
        question: "What is the pricing structure?",
        answer: "The pricing structure is transaction based",
      },
      {
        question: "Is premium support available?",
        answer: "Yes, with the custom pricing",
      },
      {
        question: "Do you manage tax remittance?",
        answer: "Yes",
      },
      {
        question:
          "Is there a fixed commitment period? Can I cancel if I decide to switch payment infrastructure providers? What occurs with my data? ",
        answer:
          "Commitment period is 6 months, and your data can be exported when you decide to switch",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
