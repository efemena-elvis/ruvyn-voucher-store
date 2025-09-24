<template>
  <div class="overview-layout-section">
    <div class="fixed-navigation"><CheckoutNavigation /></div>

    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import CheckoutNavigation from "../shared/components/checkout-overview-navigation";

export default {
  name: "CheckoutOverviewLayout",

  components: {
    CheckoutNavigation,
  },
};
</script>

<style lang="scss">
.overview-layout-section {
  .fixed-navigation {
    position: fixed;
    width: 100%;
    z-index: 5;
  }

  .layout-content {
    position: relative;
    top: toRem(67);
  }
}
</style>
