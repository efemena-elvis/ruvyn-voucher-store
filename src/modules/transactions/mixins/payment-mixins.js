import { mapGetters } from "vuex";
import { VESICASH_APP_URL } from "@/utilities/constant";
import { CURRENCY_CODE } from "@/modules/transactions/constants";

const paymentHelper = {
  components: {
    PaymentsModal: () =>
      import(
        /* webpackChunkName: "transactions-modal-module" */ "@/modules/transactions/modals/payments-modal"
      ),
  },

  computed: {
    ...mapGetters({
      getTransactionAmount: "transactions/getTransactionAmount",
    }),

    getCurrencySign() {
      return this.$money.getSign(
        this.getTransactionAmount?.currency?.slug ??
          this.getTransaction?.currency ??
          "NGN"
      );
    },

    getCurrency() {
      const currency =
        this.getTransactionAmount?.currency?.slug ??
        this.getTransaction?.currency ??
        "naira";

      return CURRENCY_CODE[currency];
    },
  },

  data() {
    return {
      show_payment_option_modal: false,
      transfer_amount: "",
      message: "",
    };
  },

  methods: {
    togglePaymentOptionModal() {
      this.show_payment_option_modal = !this.show_payment_option_modal;
    },

    closeFundDetailsAndOpenSuccess() {
      this.show_fund_wallet_info_modal = false;

      this.$router.push({
        name: "SuccessfulPayment",
        query: { currency: this.getCurrency, ...this.$route.query },
      });
    },
  },
};

export default paymentHelper;
