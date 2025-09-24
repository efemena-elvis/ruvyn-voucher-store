<template>
  <div class="shop-layout-section">
    <div class="fixed-navigation"><CheckoutNavigation /></div>

    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import CheckoutNavigation from "../shared/components/checkout-shop-navigation";

export default {
  name: "CheckoutLayout",

  components: {
    CheckoutNavigation,
  },
};
</script>

<style lang="scss">
.shop-layout-section {
  .fixed-navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
  }

  .layout-content {
    position: relative;
    top: toRem(94);
  }
}
</style>
