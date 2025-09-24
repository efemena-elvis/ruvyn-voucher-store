<template>
  <div class="product-card" v-if="product">
    <div class="product-card-img-wrapper">
      <div class="title">{{ productInitials }}</div>
      <img
        src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
        alt="clothing"
      />
    </div>
    <div class="product-meta">
      <div>
        <div class="title">{{ product.name }}</div>
        <div class="price">{{ getCountry.sign }}{{ product.price }}</div>
      </div>
      <div class="icon-spinner f-size-19 animate" v-if="adding"></div>
      <div
        class="icon icon-plus"
        title="Add to cart"
        v-else
        @click="addProductToCart(product)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      default: () => null,
    },
  },

  computed: {
    ...mapGetters({ getCountry: "checkout/getCountry" }),

    productInitials() {
      const name = this.product?.name;
      if (!name) return "";
      const names = name.split(" ");
      return names.map((name) => name.at(0)).join("");
    },
  },

  data() {
    return {
      adding: false,
    };
  },

  methods: {
    ...mapMutations({ ADD_PRODUCT_TO_CART: "checkout/ADD_PRODUCT_TO_CART" }),

    addProductToCart(product) {
      this.adding = true;

      setTimeout(() => {
        this.adding = false;
        this.ADD_PRODUCT_TO_CART(product);
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  border-radius: toRem(10);
  border: toRem(1) solid getColor("grey-200");

  .product-card-img-wrapper {
    width: 100%;
    aspect-ratio: 0.8;
    max-height: toRem(400);
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    background-color: rgba(0, 0, 0, 0.05);
    display: grid;
    place-items: center;
    position: relative;

    .title {
      font-size: 4rem;
      font-weight: 600;
      color: getColor("grey-800");
      position: absolute;
      z-index: 4;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
      position: absolute;
      opacity: 0.4;
    }
  }

  .product-meta {
    @include flex-row-between-nowrap;
    align-items: flex-end;
    padding: toRem(15);

    .title {
      font-size: 0.9rem;
      color: getColor("grey-600");
      margin-bottom: toRem(5);
    }

    .price {
      font-size: 1.2rem;
      font-weight: 700;
    }

    .icon {
      font-size: 1.5rem;
      color: getColor("grey-600");
      transition: color ease 0.2s;
      cursor: pointer;
      &:hover {
        color: getColor("grey-900");
      }
    }
  }
}
</style>
