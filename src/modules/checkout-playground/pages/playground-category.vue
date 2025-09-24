<template>
  <div class="pdb-40">
    <div class="breadcrumb tertiary-2-text">
      <router-link to="/checkout-playground">Home</router-link>
      <span class="icon icon-caret-right primary-1-text"></span>
      <span class="grey-500">{{ $route.params.category }}</span>
    </div>

    <div class="page-wrapper" v-if="getCategory">
      <div class="category-details">
        <div class="category-title">{{ getCategory.name }}</div>
        <div class="category-description">
          {{ getCategory.description }}
        </div>
      </div>

      <div class="product-list">
        <ProductCard
          v-for="product in getCategory.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../components/product-card";
export default {
  name: "CategoryPage",

  components: {
    ProductCard,
  },

  computed: {
    ...mapGetters({ getCategories: "checkout/getCategories" }),

    getCategory() {
      const slug = this.$route?.params?.category;
      return this.getCategories?.find((category) => category.slug === slug);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding: 0 toRem(60);
  @include breakpoint-down(lg) {
    padding: 0 toRem(30);
  }
}

.breadcrumb {
  @include flex-row-start-nowrap;
  gap: 0 toRem(10);
  padding: toRem(10) toRem(60);
  border-bottom: toRem(0.5) solid getColor("grey-300");
  text-transform: capitalize;

  @include breakpoint-down(lg) {
    padding: toRem(10) toRem(30);
  }
}

.category-details {
  margin-top: toRem(30);
  padding-bottom: toRem(20);
  border-bottom: toRem(0.5) solid getColor("grey-200");

  .category-title {
    font-size: 2rem;
    font-weight: 700;
    color: getColor("grey-900");
    text-transform: capitalize;
    margin-bottom: toRem(10);
  }

  .category-description {
    font-size: 1rem;
    color: getColor("grey-500");
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(toRem(250), 1fr));
  gap: toRem(30);
  padding: toRem(50) 0;
}
</style>
