<template>
  <div class="switch" v-on-clickaway="closeList">
    <div
      class="flag-wrapper neutral-10"
      :class="[toggled && 'toggled']"
      @click="toggled = !toggled"
    >
      <div class="secondary-2-text mgr-6">{{ getCountry.code }}</div>
      <img :src="getCountry.flag" alt="FLAG" />
      <div class="icon icon-caret-right" :class="[toggled && 'toggled']"></div>
    </div>

    <div class="list" v-show="toggled">
      <div
        class="list-item"
        v-for="item in checkoutCountries"
        :key="item.code"
        @click="updateCountry(item)"
      >
        <img :src="item.flag" alt="FLAG" />
        <div class="secondary-2-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NG_FLAG from "../../landing-v2/assets/flags/nigeria-flag.svg";
import GH_FLAG from "../../landing-v2/assets/flags/ghana-flag.svg";
import RW_FLAG from "../../landing-v2/assets/flags/rwanda-flag.svg";
import UG_FLAG from "../../landing-v2/assets/flags/uganda-flag.svg";
import ZM_FLAG from "../../landing-v2/assets/flags/zambia-flag.svg";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CountrySwitcher",

  data() {
    return {
      toggled: false,
    };
  },

  computed: {
    ...mapGetters({ getCountry: "checkout/getCountry" }),

    checkoutCountries() {
      const code = this.getCountry?.code;

      const mor_countries = [
        {
          name: "Nigeria",
          code: "NG",
          currency: "NGN",
          sign: "₦",
          flag: NG_FLAG,
          payment_methods: ["card"],
        },
        {
          name: "Ghana",
          code: "GH",
          currency: "GHS",
          sign: "₵",
          flag: GH_FLAG,
          payment_methods: ["card", "mobilemoneyghana"],
        },
        {
          name: "Rwanda",
          code: "RW",
          currency: "RWF",
          sign: "RWF",
          flag: RW_FLAG,
          payment_methods: ["card", "mobilemoneyrwanda"],
        },
        {
          name: "Zambia",
          code: "ZM",
          currency: "ZMW",
          sign: "ZK",
          flag: ZM_FLAG,
          payment_methods: ["card", "mobilemoneyzambia"],
        },
        {
          name: "Uganda",
          code: "UG",
          currency: "UGX",
          sign: "UGS",
          flag: UG_FLAG,
          payment_methods: ["card", "mobilemoneyuganda"],
        },
      ];

      return mor_countries.filter((item) => item.code !== code);
    },
  },

  methods: {
    ...mapMutations({ SET_CHECKOUT_COUNTRY: "checkout/SET_CHECKOUT_COUNTRY" }),

    updateCountry(country) {
      this.SET_CHECKOUT_COUNTRY(country);
      this.toggled = false;
    },

    closeList() {
      this.toggled = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  .flag-wrapper {
    @include flex-row-start-nowrap;
    padding: toRem(7) toRem(14);
    transition: all ease 0.2s;
    border-radius: toRem(16);
    cursor: pointer;

    &:hover {
      background-color: rgba(229, 237, 235, 0.1);
    }

    img {
      @include draw-shape(40, 15);
      margin-left: -5px;
    }

    .icon {
      transform: rotate(90deg);
      transition: all ease 0.2s;
      font-size: 1.5rem;
      margin-left: -10px;
    }
    .icon.toggled {
      transform: rotate(270deg);
    }
  }

  .flag-wrapper.toggled {
    background-color: rgba(229, 237, 235, 0.1);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .list {
    position: absolute;
    min-width: toRem(200);
    right: 0;
    z-index: 10;
    display: grid;
    gap: toRem(3);

    background-color: rgb(4, 59, 86);
    border-radius: toRem(16);
    border-top-right-radius: 0;

    .list-item {
      @include flex-row-start-nowrap;
      color: getColor("neutral-10");
      transition: all ease 0.2s;
      padding: toRem(10) toRem(15);
      cursor: pointer;

      img {
        @include draw-shape(40, 15);
        margin-left: -5px;
      }

      &:hover {
        background-color: rgba(229, 237, 235, 0.1);
      }
      &:first-child {
        border-top-left-radius: toRem(16);
      }
      &:last-child {
        border-bottom-left-radius: toRem(16);
      }
    }
  }
}
</style>
