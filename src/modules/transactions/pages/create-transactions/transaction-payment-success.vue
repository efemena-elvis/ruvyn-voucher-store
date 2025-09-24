<template>
  <div>
    <AuthWrapper title_text v-if="payment_confirmed">
      <!-- AUTH PAGE -->
      <div class="auth-page auth-payment-success">
        <!-- TITLE TEXT -->
        <div class="title-text text-center teal-900 h4-text mgb-38 mgt--15">
          Congratulations
        </div>

        <!-- BODY DATA -->
        <div class="body-data">
          <SuccessItemCard
            :info="{
              icon: 'SuccessIcon',
              title: 'Payment made successfully',
              description: `Your payment of <b>${$money.getSign(
                $route.query.currency
              )}${$money.addComma(
                $route.query.fee
              )}</b> has been made sucessfully, Please check your escrow account on your dashboard for the payment.`,
            }"
          />

          <SuccessItemCard
            :info="{
              icon: 'SuccessIcon',
              title: 'Users invited successfully',
              description: `${$route.query.parties} ${
                $route.query.parties === 'All' ? 'parties have' : 'has'
              } been invited sucessfully into transaction for ${
                $route.query.name
              }.`,
            }"
          />
        </div>

        <!-- BUTTON AREA -->
        <div class="btn-area mgt-30 mgb-10">
          <a
            :href="`${$app_url}/register-lander`"
            target="_blank"
            class="btn btn-primary btn-md mgb-24"
            >Create an account</a
          >

          <button
            @click="resetTransaction"
            class="btn btn-secondary btn-md w-100"
          >
            Try another scenerio
          </button>
        </div>
      </div>
    </AuthWrapper>

    <!-- MODALS -->
    <portal to="vesicash-modals">
      <transition name="fade" v-if="show_failed_modal">
        <FailedPaymentModal @confirmed="showSuccessState" />
      </transition>
    </portal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AuthWrapper from "@/modules/transactions/components/auth-wrapper";
import FailedPaymentModal from "@/modules/transactions/modals/failed-payment-modal";

export default {
  name: "PaymentSuccessful",

  metaInfo: {
    title: "Payment Successful",
    titleTemplate: "%s - Vesicash",
  },

  data() {
    return {
      show_failed_modal: false,
      payment_confirmed: true,
      retried: false,
    };
  },

  methods: {
    ...mapMutations({ RESET_TRANSACTION: "transactions/RESET_TRANSACTION" }),

    resetTransaction() {
      this.RESET_TRANSACTION();
      this.$router.push({ name: "TransactionSetup" });
    },

    showSuccessState() {
      this.show_failed_modal = false;
      this.payment_confirmed = true;
    },
  },

  components: {
    FailedPaymentModal,
    AuthWrapper,
    SuccessItemCard: () =>
      import(
        /* webpackChunkName: 'shared-module' */ "@/shared/components/card-comps/success-item-card"
      ),
  },
};
</script>

<style lang="scss" scoped>
.auth-payment-success {
  width: toRem(520) !important;

  @include breakpoint-down(md) {
    width: toRem(480) !important;
  }

  @include breakpoint-down(sm) {
    width: 100% !important;
  }

  .title-text {
    font-size: toRem(23);

    @include breakpoint-down(xs) {
      font-size: toRem(22);
    }
  }
}
</style>