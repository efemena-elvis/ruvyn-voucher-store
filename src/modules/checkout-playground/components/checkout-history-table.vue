<template>
  <!-- TABLE CONTAINER -->
  <TableContainer
    table_name="checkout-tb"
    :table_data="getPaginatedHistory"
    :table_header="table_header"
    :is_loading="table_loading"
    :empty_message="getEmptyMessage"
    show_paging
    :pagination="getPagination"
    @goToPage="updatePage"
  >
    <CheckoutTableRow
      v-for="(data, index) in getPaginatedHistory"
      :key="index"
      table_name="checkout-tb"
      :data="data"
      :index="index + 1 + (page - 1) * per_page"
    />
  </TableContainer>
</template>

<script>
import { mapActions } from "vuex";
import TableContainer from "@/shared/components/table-comps/table-container";

export default {
  name: "CheckoutHistoryTable",

  components: {
    TableContainer,

    CheckoutTableRow: () =>
      import(
        /* webpackChunkName: "checkout-module" */ "@/modules/checkout-playground/components/checkout-table-row"
      ),
  },

  props: {},

  watch: {
    "$route.query.page": {
      handler(page) {
        if (page) this.page = Number(page);
      },
      immediate: true,
      deep: true,
    },
  },

  computed: {
    getEmptyMessage() {
      return "No checkout payment yet!";
    },

    getEmptyActionName() {
      return "";
    },

    getPaginatedHistory() {
      return this.history.map((item) => {
        const txn_date = this.$date?.formatDate(
          new Date(item?.transaction_date),
          false
        );

        const year = txn_date.getYear("y1");
        const month = txn_date.getMonth("m4");
        const day = txn_date.getDay("d3");

        const date = `${day} ${month}, ${year}`;
        const cost = this.getCost(item.currency, item.amount);
        const tax = this.getCost(item.currency, item.tax_fee);

        return { ...item, date, cost, tax };
      });
    },

    getPagination() {
      return {
        current_page: this.pagination?.current_page,
        per_page: 8,
        last_page: this.pagination?.total_pages_count,
        from: 0,
        to: 0,
        total: 0,
      };
    },
  },

  data() {
    return {
      table_header: [
        "#",
        "Date",
        "Customer Name",
        "Payment Info",
        "Tax Amount",
        "Status",
      ],

      table_data: [6],
      table_loading: false,
      history: [],
      paginatedData: {},
      paginationPages: {},
      page: 1,
      per_page: 10,
      pagination: {
        current_page: 1,
        per_page: 10,
        last_page: 3,
        from: 1,
        to: 20,
        total: 50,
        total_pages_count: 1,
      },
      empty_message: "",
    };
  },

  mounted() {
    this.fetchHistory();
  },

  methods: {
    ...mapActions({
      fetchCheckoutTransactions: "checkout/fetchCheckoutTransactions",
    }),

    updatePage(page) {
      this.page = Number(page);
      const query_page = this.$route?.query.page;
      const query = { ...this.$route?.query, page };

      if (this.page != Number(query_page))
        this.$router.replace({
          path: this.$route.path,
          query: { ...query },
        });

      this.fetchHistory();
    },

    getCost(currency, cost) {
      return `${this.$money?.getSign(currency)}${this.$money.addComma(cost)}`;
    },

    // ====================================
    // FETCH ALL CHECKOUT TXN
    // ====================================
    fetchHistory() {
      this.table_loading = true;
      const page = this.$route?.query?.page || 1;

      this.fetchCheckoutTransactions(page)
        .then((response) => {
          this.table_loading = false;
          if (response.code === 200) {
            this.history = response.data;
            this.pagination = Array.isArray(response?.pagination)
              ? response?.pagination[0]
              : response?.pagination;
          } else this.pushToast(response.message, "warning");
        })
        .catch(() => {
          console.log("ERROR CHECKOUT HISTROY");
          this.table_loading = false;
          this.pushToast("Failed to load checkout history", "error");
        });
    },
  },
};
</script>

<style lang="scss">
.checkout-tb {
  &-1 {
    min-width: toRem(50);
  }

  &-2 {
    min-width: toRem(100);
  }

  &-4,
  &-5 {
    min-width: toRem(160);
  }

  &-3 {
    min-width: toRem(200);
  }

  &-6 {
    min-width: toRem(100);
  }

  .head-data {
    padding: toRem(13) toRem(22) !important;
  }

  .body-data {
    padding: toRem(10) toRem(22) !important;
  }
}
</style>
