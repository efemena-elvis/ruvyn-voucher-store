<template>
  <div class="status-display">
    <div class="status-icon" :class="statusClass">
      <svg
        class="status-icon__svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="statusStyles.iconPath"
        ></path>
      </svg>
    </div>

    <h2 class="status-title">{{ title }}</h2>
    <p class="status-message">
      {{ message }}
    </p>

    <div class="status-transaction" v-if="transaction_ref">
      <p class="label">Transaction Reference:</p>
      <p class="value" v-if = "status === 'success'">{{ transaction_ref }}</p>
    </div>

    <div class="status-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusDisplay",
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => ["success", "pending", "failed"].includes(value),
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      transaction_ref: null,
    };
  },
  computed: {
    statusStyles() {
      switch (this.status) {
        case "failed":
          return {
            iconPath: "M6 18L18 6M6 6l12 12",
          };
        case "pending":
          return {
            iconPath:
              "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
          };
        case "success":
        default:
          return {
            iconPath: "M5 13l4 4L19 7",
          };
      }
    },
    statusClass() {
      return `status-${this.status}`;
    },
  },
  mounted() {
    this.transaction_ref = localStorage.getItem("transaction_ref");
  },
};
</script>

<style lang="scss" scoped>
.status-display {
  background: var(--color-background-default);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .status-icon {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    &__svg {
      width: 3rem;
      height: 3rem;
      color: #fff;
    }
  }

  .status-success {
    background-color: #22c55e; 
  }
  .status-pending {
    background-color: #facc15; 
  }
  .status-failed {
    background-color: #ef4444; 
  }

  .status-title {
    font-size: 1.875rem;
    font-weight: 800;
    color: var(--color-text-primary);
  }

  .status-message {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--color-text-secondary);
    max-width: 28rem;
  }

  .status-transaction {
    margin-top: 1rem;

    .label {
      font-weight: 600;
    }

    .value {
      color: var(--color-primary-600);
      font-size: 1.125rem;
      font-weight: 700;
    }
  }

  .status-actions {
    margin-top: 2rem;
  }
}
</style>
