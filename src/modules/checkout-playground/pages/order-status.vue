<template>
  <div class="order-status-wrapper">
    <div v-if="loading" class="loading-container">
      <svg
        class="spinner"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="spinner-circle"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="spinner-path"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p class="loading-text">Checking order status...</p>
    </div>

    <component v-else :is="currentComponent" />
  </div>
</template>

<script>
import OrderSuccess from "../components/order-success.vue";
import OrderPending from "../components/order-pending.vue";
import OrderFailed from "../components/order-failed.vue";
import { mapActions } from "vuex";

export default {
  name: "OrderStatus",
  components: {
    OrderSuccess,
    OrderPending,
    OrderFailed,
  },
  data() {
    return {
      currentStatus: "pending",
      loading: true,
    };
  },
  computed: {
    currentComponent() {
      switch (this.currentStatus) {
        case "success":
          return "OrderSuccess";
        case "failed":
          return "OrderFailed";
        default:
          return "OrderPending";
      }
    },
  },
  methods: {
    ...mapActions({
      checkOrderStatus: "checkout/checkRuvynOrderStatus",
    }),

    async verifyOrder() {
      try {
        const txRef = localStorage.getItem("transaction_ref");
        const response = await this.checkOrderStatus(txRef);

        this.currentStatus = response.data?.status || "failed";
      } catch (error) {
        console.error(
          "Error checking order status:",
          error.response?.data || error
        );
        this.currentStatus = "failed";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.verifyOrder();
  },
};
</script>

<style lang="scss" scoped>
.order-status-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 1rem;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .spinner {
    width: 3rem;
    height: 3rem;
    animation: spin 1s linear infinite;

    .spinner-circle {
      opacity: 0.25;
      stroke: #4b5563; 
    }

    .spinner-path {
      opacity: 0.75;
      fill: #4b5563; 
    }
  }

  .loading-text {
    font-size: 1rem;
    font-weight: 500;
    color: #374151;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
