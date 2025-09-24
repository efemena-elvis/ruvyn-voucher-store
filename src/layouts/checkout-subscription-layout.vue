<template>
  <div class="layout-section">
    <div class="fixed-navigation"><CheckoutNavigation /></div>

    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import CheckoutNavigation from "../shared/components/checkout-subscription-navigation";

export default {
  name: "CheckoutLayout",

  components: {
    CheckoutNavigation,
  },
};
</script>

<style lang="scss">
.fixed-navigation {
  position: fixed;
  width: 100%;
  z-index: 5;
}

.layout-content {
  position: relative;
  top: toRem(107);
}
</style>
