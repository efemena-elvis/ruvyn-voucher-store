<template>
  <div class="preview">
    <div class="sidebar"></div>

    <div class="module-preview">
      <div class="overlay"></div>
      <div class="brand-logo">
        <img :src="loadImage('vesicash-brand.png')" alt="" />
      </div>
      <div class="preview-area">
        <div class="checkout-title">Merchant Checkout</div>
        <CustomerDetailsPreview />
        <CustomerOrderPreview />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerDetailsPreview from "./customer-details-preview";
import CustomerOrderPreview from "./customer-order-preview";

export default {
  name: "CheckoutPreview",

  components: {
    CustomerDetailsPreview,
    CustomerOrderPreview,
  },
};
</script>

<style lang="scss" scoped>
.preview {
  display: grid;
  grid-template-columns: toRem(400) 1fr;

  @include breakpoint-custom-down(1300) {
    grid-template-columns: 100%;
  }

  .module-preview {
    background-color: getColor("teal-800");
    padding: toRem(50);
    position: relative;
    overflow: auto;
    max-height: 100vh;

    .brand-logo {
      width: toRem(170);
      margin: 0 auto toRem(50) auto;
      background-color: transparent;

      img {
        width: 100%;
        height: auto;
      }
    }

    .preview-area {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: toRem(20);
      align-items: flex-start;
      max-width: toRem(1000);
      margin: auto;

      @include breakpoint-custom-down(850) {
        grid-template-columns: 100%;
      }

      .checkout-title {
        grid-column: 1/-1;
        font-size: 1.6rem;
        font-weight: 600;
        color: getColor("neutral-10");
      }
    }
  }
}
</style>
