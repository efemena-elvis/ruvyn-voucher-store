<template>
  <div class="overview">
    <div class="content">Loading ...</div>
  </div>
</template>
  
<script>
export default {
  name: "CheckoutShop",

  created() {
    this.$router.push({
      name: "PlaygroundCategory",
      params: { category: "arrivals" },
    });
  },
};
</script>
  
  <style lang="scss" scoped>
.overview {
  min-height: calc(100vh - 70px);
  background-color: getColor("teal-900");
  padding: toRem(50) toRem(20);

  .content {
    margin: auto;
  }
}
</style>
  