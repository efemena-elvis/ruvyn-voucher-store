<template>
  <div class="order-preview neutral-10-bg rounded-8">
    <template>
      <div class="wrapper mgb-24">
        <div class="title-text">ORDER SUMMARY</div>

        <!-- PRODUCT DETAILS -->
        <div class="product-details mgb-24">
          <div class="product-list">
            <div class="item-row">
              <div class="title">Subtotal</div>
              <div class="value">$500.00</div>
            </div>

            <div class="item-row">
              <div class="title">Shipping</div>
              <div class="value">$30.00</div>
            </div>

            <div class="item-row">
              <div class="title">VAT</div>
              <div class="value">$20</div>
            </div>
          </div>

          <div class="product-total">
            <div class="item-row mgb-0">
              <div class="title">Total amount</div>
              <div class="value fw-bold">$550</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template>
      <div class="title-text">PAYMENT INFORMATON</div>

      <div class="payment-type">
        <label class="payment-type-item pointer" for="pay-info">
          <input type="checkbox" name="pay-info" id="pay-info" />
          <div class="secondary-2-text grey-700">Pay by card</div>
          <div class="primary-2-text">$60</div>
        </label>
      </div>
    </template>

    <div class="mgt-24">
      <button class="btn btn-md w-100 pdy-10" ref="btnRef" disabled>
        Make payment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPreview",
};
</script>

<style lang="scss" scoped>
.order-preview {
  padding: toRem(24);

  .payment-type {
    display: grid;
    gap: toRem(15) 0;

    .payment-type-item {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 toRem(8);
      align-items: center;
      border: toRem(1) solid getColor("grey-200");
      border-radius: toRem(10);
      padding: toRem(10) toRem(12);
    }
  }

  .title-text {
    @include generate-font-type("primary-1");
    color: getColor("grey-900");
    margin-bottom: toRem(24);
  }

  .product-details {
    .item-row {
      @include flex-row-between-nowrap;
      @include generate-font-type("secondary-1");
      margin-bottom: toRem(16.5);

      .title {
        color: getColor("grey-600");
      }

      .value {
        color: getColor("grey-900");
      }
    }

    .product-total {
      padding: toRem(16.5) 0;
      border-top: toRem(0.5) solid getColor("grey-200");
      border-bottom: toRem(0.5) solid getColor("grey-200");
    }
  }

  .btn {
    background: getColor("teal-800");
    color: getColor("neutral-10");

    &:hover {
      background: darken(getColor("teal-800"), 6%);
    }
  }
}
</style>
