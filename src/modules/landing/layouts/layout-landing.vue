<template>
  <div>
    <!-- TOP NAVIGATION -->
    <Navigation />

    <!-- BODY SECTION -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER SECTION -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Navigation from "@/modules/landing-v2/components/navigation";
import Footer from "@/modules/landing-v2/components/footer";

export default {
  name: "LauoutLanding",

  components: {
    Navigation,
    Footer,
  },

  computed: {
    ...mapGetters({ getTransactions: "transactions/getTransactions" }),
  },

  mounted() {
    this.$color.setPageBackgroundColor("#ffffff");
    this.resetTransaction();
  },

  methods: {
    ...mapMutations({ RESET_TRANSACTION: "transactions/RESET_TRANSACTION" }),

    resetTransaction() {
      if (this.getTransactions?.name?.length) {
        this.RESET_TRANSACTION();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
