<template>
  <div class="mobile-menu neutral-10-bg index-99">
    <div class="vesicash-container">
      <!-- TOP ROW -->
      <div class="top-row">
        <div class="nav-content w-100 mx-auto">
          <template v-if="sub_stack_view">
            <div
              class="d-flex justify-content-start align-items-center roobert-500 pointer"
              style="width: max-content"
              @click="$emit('changeStackView')"
            >
              <div
                class="icon icon-caret-left grey-500 f-size-26 mgr--4"
                style="position: relative; left: -5px"
              ></div>
              <div class="text f-size-15-5 grey-600">Back</div>
            </div>
          </template>

          <template v-else>
            <!-- APP LOGO  -->
            <router-link :to="{ name: 'VesicashHome' }" class="brand-logo">
              <VesicashBrandLogo />
            </router-link>

            <!-- MENU TOGGLE  -->
            <div
              class="menu-toggler rounded-circle smooth-transition grey-50-bg pointer"
              @click="$emit('closeMenu')"
            >
              <div class="icon icon-close grey-700" title="Menu"></div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- MENU ROW -->
    <div class="bottom-row">
      <!-- MOBILE SUB STACK VIEW -->
      <template v-if="sub_stack_view">
        <div class="vesicash-container mgt--10">
          <div
            class="title-text grey-700 roobert-500 secondary-1-text text-capitalize"
          >
            {{
              product_level === "billing"
                ? `${product_level} box`
                : product_level
            }}
          </div>
        </div>

        <div
          class="nav-menu-stack mgt-20"
          v-if="current_product_stack.primary_stack.length"
        >
          <MenuStack
            v-for="(item, index) in current_product_stack.primary_stack"
            :key="index"
            :menu="item"
          />
        </div>
      </template>

      <div class="nav-items" v-else>
        <NavItem
          nav_link="#"
          nav_text="Products"
          :active_level="product_level"
          :stack="product_stack.side_stack"
          :primary_stack="current_product_stack.primary_stack"
          :secondary_stack="current_product_stack.secondary_stack"
          is_mobile_view
          @switchMenu="updateProductStack"
        />
        <NavItem nav_link="/about" nav_text="About us" />
        <NavItem nav_link="/pricing-plans" nav_text="Pricing" />
        <NavItem
          nav_link="#"
          nav_text="Resources"
          :primary_stack="resource_stack.primary_stack"
        />
        <NavItem nav_link="/developers" nav_text="Developers" />
      </div>

      <div class="vesicash-container">
        <a :href="`${$app_url}/login`" class="btn btn-tertiary btn-md mgb-24"
          >Sign In</a
        >
        <a :href="`${$app_url}/register-lander`" class="btn btn-primary btn-md"
          >Create an account</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import NavItem from "@/modules/landing-v2/components/nav-item";
import MenuStack from "@/modules/landing-v2/components/menu-stack";

export default {
  name: "MobileMenu",

  components: {
    VesicashBrandLogo,
    MenuStack,
    NavItem,
  },

  props: {
    product_level: {
      type: String,
      default: "billing",
    },

    current_product_stack: {
      type: Object,
    },

    product_stack: {
      type: Object,
    },

    resource_stack: {
      type: Object,
    },

    sub_stack_view: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    $route: {
      handler() {
        this.$emit("closeMenu");
      },
    },
  },

  methods: {
    updateProductStack($event) {
      this.$emit("updateProductStack", $event);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide-left {
  0%,
  30% {
    margin-left: -25px;
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.mobile-menu {
  @include breakpoint-up(lg) {
    display: none;
  }
  animation: slide-left 0.4s ease-in-out forwards;
  @include fixed-display-area;
  padding-bottom: toRem(40);
  overflow: auto;

  .top-row {
    padding: toRem(22) 0;
    @include transition(0.3s);

    .nav-content {
      @include flex-row-between-nowrap;

      .brand-logo {
        svg {
          width: toRem(141);
          height: auto;
        }
      }

      .menu-toggler {
        @include draw-shape(32);
        position: relative;

        .icon {
          @include center-placement();
          font-size: toRem(24);
        }

        &:hover {
          background: getColor("grey-100");
        }
      }
    }
  }

  .bottom-row {
    margin-top: toRem(20);

    .nav-items {
      @include flex-column-start-start;
    }

    .nav-menu-stack {
      border-radius: 0;
      width: 100%;
      padding: 0;
      gap: 0;

      .menu-stack {
        background: getColor("neutral-10") !important;

        &:hover {
          background: getColor("teal-50") !important;
        }
      }
    }

    .btn {
      width: 100%;
      padding: toRem(11.5);

      &:first-of-type {
        margin-top: toRem(50);
      }
    }
  }
}
</style>
