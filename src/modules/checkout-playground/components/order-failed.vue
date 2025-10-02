<template>
  <div class="order-pending-wrapper">
  <StatusDisplay
      status="failed"
      title="Order Failed"
      message="We were unable to process your order. Please try again or contact support if the issue persists."
    >
      <template slot="actions">
        <div class="order-pending-actions">
          <RouterLink to="/" class="btn-secondary">
            Continue Shopping
          </RouterLink>
        </div>
      </template>
    </StatusDisplay>
  </div>
</template>

<script lang="ts">
import StatusDisplay from './status-display.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'OrderPending',
  components: {
    StatusDisplay,
    RouterLink,
  },
}
</script>

<style lang="scss" scoped>
.order-pending-wrapper {
  min-height: 100vh;
  background: var(--color-background-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.order-pending-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
}

.btn-secondary {
  width: 100%;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  background: #e5e5e5; // neutral-200
  color: var(--color-text-primary);
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #d4d4d4; // neutral-300
  }

  @media (min-width: 640px) {
    width: auto;
  }
}
</style>
