<template>
  <div class="line-item" v-if="item">
    <div class="img-wrapper">
      <div class="title">{{ productInitials }}</div>
      <img
        src="https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg"
        alt="clothing"
      />
    </div>

    <div class="top-row">
      <div>
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ getCountry.sign }}{{ item.price }}</div>
        <div class="secondary-3-text grey-600 mgt-5">
          Tax: {{ getCountry.sign }}{{ item.tax.toFixed(2) }}
        </div>
      </div>
      <div class="remove" @click="REMOVE_CART_ITEM(item)">Remove</div>
    </div>

    <div class="bottom-row">
      <input
        type="number"
        class="form-control"
        min="1"
        :value="item.quantity"
        @change="updateItemQuantity($event.target.value)"
      />
      <div class="price">
        {{ getCountry.sign }}{{ (item.price * item.quantity).toFixed(2) }}
      </div>
      <!-- <div class="remove">Remove</div> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "LineItem",

  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },

  computed: {
    ...mapGetters({ getCountry: "checkout/getCountry" }),

    productInitials() {
      const name = this.item?.name;
      if (!name) return "";
      const names = name.split(" ");
      return names.map((name) => name.at(0)).join("");
    },
  },

  methods: {
    ...mapMutations({
      REMOVE_CART_ITEM: "checkout/REMOVE_CART_ITEM",
      UPDATE_CART_ITEM: "checkout/UPDATE_CART_ITEM",
    }),

    updateItemQuantity(qty) {
      const quantity = Number(qty);
      const updatedQuantity = quantity < 1 ? 1 : quantity;

      this.UPDATE_CART_ITEM({ product: this.item, quantity: updatedQuantity });
    },
  },
};
</script>

<style lang="scss" scoped>
.line-item {
  display: grid;
  grid-template-columns: toRem(120) 1fr;
  grid-template-rows: toRem(80) toRem(55);
  padding: toRem(30) 0;
  border-bottom: toRem(0.5) solid getColor("grey-200");
  grid-auto-flow: row;
  gap: 0 toRem(20);

  .img-wrapper {
    grid-row: 1/-1;
    border-radius: toRem(6);
    position: relative;
    display: grid;
    place-items: center;

    .title {
      font-size: 2rem;
      font-weight: 600;
      color: getColor("grey-800");
      position: absolute;
      z-index: 4;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      opacity: 0.4;
      position: absolute;
    }
  }

  .top-row {
    @include flex-row-between-nowrap;
    align-items: flex-start;

    .name {
      font-size: 0.95rem;
      color: getColor("grey-700");
    }

    .price {
      font-size: 1rem;
      font-weight: 600;
      color: getColor("grey-900");
    }

    .remove {
      font-size: 0.9rem;
      color: getColor("red-500");
      transition: color ease 0.2s;
      cursor: pointer;
      &:hover {
        color: getColor("red-600");
      }
    }
  }

  .bottom-row {
    @include flex-row-between-nowrap;

    input[type="number"] {
      max-width: toRem(70);
      max-height: toRem(50);

      &::-webkit-inner-spin-button {
        opacity: 1 !important;
      }
      &::-webkit-outer-spin-button {
        opacity: 1 !important;
      }
    }

    .remove {
      font-size: 0.9rem;
      color: getColor("red-500");
      transition: color ease 0.2s;
      cursor: pointer;
      &:hover {
        color: getColor("red-600");
      }
    }
  }
}
</style>
