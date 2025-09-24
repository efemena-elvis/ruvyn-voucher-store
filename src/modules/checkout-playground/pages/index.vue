<template>
  <div class="overview">
    <div class="content">
      <div class="h3-text neutral-10 text-center">
        MOR payment implementation
      </div>
      <div
        class="tertiary-1-text neutral-10 text-center mgt-20 mgb-40 grey-200"
      >
        The MOR checkout implementation helps you process payment within any
        global market
      </div>
      <div class="view-options">
        <router-link to="/checkout-playground/subscription" class="option-link">
          <MoneyIcon />

          <div class="grey-800 primary-2-text text-center mgy-15">
            Payment Link
          </div>
          <div class="grey-500 text-center">
            Process payment with payment link generated with our payment module
          </div>
        </router-link>
        <router-link to="/checkout-playground/arrivals" class="option-link">
          <ApiIcon />
          <div class="grey-800 primary-2-text text-center mgy-15">API</div>
          <div class="grey-500 text-center">Integrate our checkout API</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MoneyIcon from "../../../shared/components/icon-comps/cash-icon";
import ApiIcon from "../../../shared/components/icon-comps/api-icon";

export default {
  name: "CheckoutOverview",

  components: {
    ApiIcon,
    MoneyIcon,
  },
};
</script>

<style lang="scss" scoped>
.overview {
  min-height: calc(100vh - 70px);
  background-color: getColor("teal-900");
  padding: toRem(50) toRem(20);

  .content {
    width: toRem(600);
    max-width: 95%;
    margin: auto;
  }

  .view-options {
    padding: toRem(40) toRem(20);
    background-color: getColor("neutral-10");
    border-radius: toRem(15);
    margin: toRem(60) auto;
    @include flex-row-center-wrap;
    gap: toRem(40);
    .option-link {
      width: toRem(220);
      aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      border: toRem(1) solid getColor("grey-400");
      border-radius: toRem(10);
      background-color: transparent;
      transition: all ease 0.2s;
      padding: toRem(15);

      &:hover {
        background-color: rgba(#8ddca2, 0.4);
        border-color: getColor("green-400");
      }
    }
  }
}
</style>
