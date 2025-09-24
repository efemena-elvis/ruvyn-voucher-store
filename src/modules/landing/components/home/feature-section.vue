<template>
  <div class="feature-section">
    <div class="vesicash-container row">
      <div class="col-12 col-md-6 mb-5 mb-md-0">
        <FeatureCard
          :feature="{
            title: 'Instant digital escrow',
            description:
              'Deploy escrow as a transparent fund management solution, or for (international) transactional purposes. Disburse escrowed funds in a single payment or according to milestones. Split your disbursement into commissions as needed.',
            image: 'feature-one.png',
          }"
        />
      </div>

      <div class="col-12 col-md-6">
        <FeatureCard
          :feature="{
            title: 'Merchant of Record',
            description:
              'With Vesicash\'s Merchant of Record technology (MoR), you don\'t have to worry about setting up a separate payment infrastructure for each payment channel or market: all your payments costs are handled in one set of costs. Our comprehensive suite of features can help you unlock new opportunities for growth. You can now expand into new markets, launch new products quickly, and much more.',
            image: 'feature-two.png',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",

  components: {
    FeatureCard: () =>
      import(
        /* webpackChunkName: "landing-module" */ "@/modules/landing/components/home/feature-card"
      ),
  },
};
</script>

<style lang="scss" scoped>
.feature-section {
  padding: toRem(120) toRem(20);

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }
}
</style>
