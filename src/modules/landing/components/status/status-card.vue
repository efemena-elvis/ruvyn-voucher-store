<template>
  <div class="status-card">
    <div class="title-text grey-900 roobert-500 secondary-1-text">
      {{ status.title }}
    </div>

    <div
      class="status-text roobert-400 tertiary-2-text"
      :class="status.status === 'Operational' ? 'green-500' : 'red-500'"
    >
      {{ status.status }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusCard",

  props: {
    status: {
      type: Object,
      default: () => ({
        title: "Auth",
        status: "Operational",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.status-card {
  @include flex-row-between-nowrap;
  align-items: center;
  padding: toRem(17) toRem(24);
  border: toRem(1) solid getColor("grey-100");

  .title-text {
  }

  .status-text {
  }
}
</style>