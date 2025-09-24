<template>
  <div>
    <div class="navigation">
      <router-link to="/">
        <div class="brand-logo">
          <VesicashBrandLogo class="logo" />
          <img
            v-lazy="loadImage('vesicash-logo.png')"
            alt="LOGO"
            class="mobile-logo"
          />
        </div>
      </router-link>
    </div>
    <div class="top-nav">
      <router-link class="btn btn-md btn-plain" to="/checkout-playground">
        <span class="icon icon-caret-left primary-1-text mgt-3"></span> Back
      </router-link>

      <button class="btn btn-md btn-plain" @click="closed = false">
        <span class="mgt-2 icon icon-edit-pen mgr-4"></span> Set payment links
      </button>
    </div>

    <div
      :class="[closed ? 'overlay close' : 'overlay']"
      @click="closed = true"
    ></div>
    <div :class="[closed ? 'settings-wrapper close' : 'settings-wrapper']">
      <PaymentLinksSettings @saved="closed = true" :open="!closed" />
    </div>
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import PaymentLinksSettings from "../../modules/checkout-playground/components/payment-links-settings.vue";

export default {
  name: "CheckoutSubscriptionNavigation",

  components: {
    VesicashBrandLogo,
    PaymentLinksSettings,
  },

  data() {
    return {
      closed: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  @include flex-row-between-nowrap;
  background-color: getColor("teal-800");
  padding: toRem(10) toRem(60);

  @include breakpoint-down(lg) {
    padding: toRem(5) toRem(30);
  }
}

.navigation {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  background: getColor("neutral-10");
  padding: toRem(15) toRem(60);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.1);

  @include breakpoint-down(lg) {
    padding: toRem(15) toRem(30);
  }

  .brand-logo {
    svg {
      width: toRem(150);
      height: auto;
    }

    .logo {
      @include breakpoint-down(lg) {
        display: none;
      }
    }
    .mobile-logo {
      display: none;
      @include breakpoint-down(lg) {
        display: block;
        width: toRem(50);
        height: toRem(30);
      }
    }
  }
}

.overlay {
  position: fixed;
  z-index: 5;
  inset: 0;
  background-color: rgba(#000, 0.3);
  transition: background ease 0.25s;
}

.overlay.close {
  position: absolute;
  background-color: transparent;
  z-index: -1;
}

.settings-wrapper {
  width: toRem(450);
  max-width: 100%;
  border: 1.5px solid getColor("grey-400");
  transition: transform ease 0.25s;
  background-color: getColor("neutral-10");
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 6;
}

.settings-wrapper.close {
  transform: translateX(100%);
}
</style>
