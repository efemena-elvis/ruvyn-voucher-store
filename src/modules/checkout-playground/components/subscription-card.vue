<template>
  <div class="card">
    <div class="top-section pdx-25 pdy-20 grey-50-bg">
      <div class="primary-1-text mgb-6">{{ sub.name }}</div>
      <div class="tertiary-2-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores
        vel, saepe provident
      </div>
    </div>
    <div class="bottom-section pdx-25 pdy-10">
      <div class="h4-text">${{ sub.price }}</div>
      <div class="tertiary-2-text">per month</div>
      <a
        :href="sub.link"
        class="btn btn-sm btn-primary mgy-20 d-inline-flex"
        v-if="sub.link"
        >Make payment</a
      >
      <button class="btn btn-sm btn-primary mgy-20" disabled v-else>
        Make payment
      </button>

      <div class="primary-1-text mgb-6">Features</div>
      <div class="features-block">
        <div
          class="d-flex"
          v-for="(feature, i) in sub.features"
          :key="feature + i"
        >
          <span class="icon icon-plus mgt-2 mgr-6"></span>
          <span class="tertiary-2-text">{{ feature }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionCard",

  props: {
    sub: {
      type: Object,
      default: () => ({
        name: "",
        price: "",
        link: "",
        features: [],
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: toRem(15);

  .top-section {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .features-block {
    display: grid;
    gap: toRem(15) 0;
    margin-top: toRem(12);
  }
}
</style>
