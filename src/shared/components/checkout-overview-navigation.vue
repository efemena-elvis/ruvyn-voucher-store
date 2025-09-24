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
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";

export default {
  name: "CheckoutOverviewNavigation",

  components: {
    VesicashBrandLogo,
  },
};
</script>

<style lang="scss" scoped>
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
</style>
