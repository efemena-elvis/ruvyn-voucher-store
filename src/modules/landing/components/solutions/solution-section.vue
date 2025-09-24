<template>
  <div class="solution-section">
    <div class="vesicash-container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(solution, index) in solutions"
          :key="index"
        >
          <SolutionCard :solution="solution" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionSection",

  components: {
    SolutionCard: () =>
      import(
        /* webpackChunkName: "landing-module"  */ "@/modules/landing/components/solutions/solution-card"
      ),
  },

  data: () => ({
    solutions: [
      {
        icon: "wallet-icon.png",
        title: "Multi-Currency Wallet Support / Accounts",
        description:
          "Make and receive business payments from all over the world. Withdraw money from a linked bank account or send money to over 50 countries with just a few clicks.",
      },
      {
        icon: "certified-icon.png",
        title: "Instant Digital Escrow",
        description:
          "Payment security for your business. Via our fully adaptable, patented escrow technology, transaction control is distributed equally, ensuring payment assurance and transparency.",
      },
      {
        icon: "exchange-icon.png",
        title: "Local Currency Support",
        description:
          "Offer your customers the payment options for the currencies they prefer, according to their location.",
      },
      {
        icon: "money-icon.png",
        title: "Seamless Reconciliation",
        description:
          "Enjoy seamless reconciliation of your customers' payments across multiple payment methods and currencies.",
      },
      {
        icon: "bank-icon.png",
        title: "24/7 Support",
        description:
          "Customer success is key to us. We provide unrivalled response time to inquiries and offer support for technical or service inquiries, around the clock.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.solution-section {
  padding-bottom: toRem(58);
}
</style>
