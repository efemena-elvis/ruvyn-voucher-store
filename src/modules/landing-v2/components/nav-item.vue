<template>
  <div class="nav-wrapper">
    <div class="nav-item-wrapper">
      <div class="nav-item-top">
        <div
          class="nav-item-container d-flex justify-content-between align-items-center w-100"
        >
          <router-link :to="nav_link" class="nav-item">{{
            nav_text
          }}</router-link>
          <div
            class="icon icon-caret-right grey-500"
            v-if="primary_stack.length"
          ></div>
        </div>
      </div>

      <!-- DROPDOWN MENU AREA -->
      <div
        class="dropdown-menu-wrapper smooth-animation"
        v-if="primary_stack.length"
      >
        <div class="dropdown-menu-content">
          <div class="nav-menu-stack primary-stack" v-if="stack.length">
            <MenuStack
              v-for="(item, index) in stack"
              :key="index"
              :menu="item"
              :active_level="active_level"
              :is_mobile_view="is_mobile_view"
              @switchNavigation="$emit('switchMenu', index)"
            />
          </div>

          <template v-if="is_mobile_view && !stack.length">
            <div class="nav-menu-stack" v-if="primary_stack.length">
              <MenuStack
                v-for="(item, index) in primary_stack"
                :key="index"
                :menu="item"
              />
            </div>
          </template>

          <template v-else-if="!is_mobile_view">
            <div class="nav-menu-stack" v-if="primary_stack.length">
              <MenuStack
                v-for="(item, index) in primary_stack"
                :key="index"
                :menu="item"
              />
            </div>
          </template>

          <div class="nav-menu-stack" v-if="secondary_stack.length">
            <MenuStack
              v-for="(item, index) in secondary_stack"
              :key="index"
              :menu="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuStack from "@/modules/landing-v2/components/menu-stack";

export default {
  name: "NavItem",

  components: {
    MenuStack,
  },

  props: {
    nav_link: {
      type: String,
    },

    nav_text: {
      type: String,
    },

    active_level: {
      type: String,
    },

    stack: {
      type: Array,
      default: () => [],
    },

    primary_stack: {
      type: Array,
      default: () => [],
    },

    secondary_stack: {
      type: Array,
      default: () => [],
    },

    is_mobile_view: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: relative;

  @include breakpoint-custom-down(1020) {
    width: 100%;
  }

  .nav-item-wrapper {
    @include flex-row-between-nowrap;
    margin-right: toRem(34);
    align-items: center;
    position: relative;

    @include breakpoint-custom-down(1100) {
      margin-right: toRem(28);
    }

    @include breakpoint-custom-down(1050) {
      margin-right: toRem(20);
    }

    @include breakpoint-custom-down(1024) {
      @include flex-column-start-start;
      margin-right: 0;
      width: 100%;
    }

    &:hover {
      &::after {
        content: "";
        position: absolute;
        height: toRem(40);
        top: toRem(22);
        width: toRem(450);
        z-index: 100;

        @include breakpoint-custom-down(1024) {
          top: 100%;
          width: 100%;
        }
      }
    }

    .nav-item-top {
      @include breakpoint-custom-down(1020) {
        padding: 0 toRem(24);
        width: 100%;
      }

      @include breakpoint-down(sm) {
        padding: 0 toRem(16);
      }

      @include breakpoint-down(xs) {
        padding: 0 toRem(14);
      }

      .nav-item-container {
        @include breakpoint-custom-down(1020) {
          border-bottom: toRem(1) solid lighten(getColor("grey-100"), 1.5%);
          padding: toRem(20) toRem(5);
          width: 100%;
        }

        .nav-item {
          font-family: "Roobert-Medium", sans-serif;
          @include font-height(15.75, 21);
          color: getColor("grey-600");
          @include transition(0.4s);
          margin-right: toRem(2);

          @include breakpoint-custom-down(1100) {
            @include font-height(15.5, 21);
          }

          @include breakpoint-custom-down(1020) {
            @include font-height(16, 22);
          }

          @include breakpoint-down(md) {
            @include font-height(15.65, 21);
          }

          &:hover,
          &.router-link-exact-active {
            color: getColor("green-500");
          }
        }

        .icon {
          @include transition(0.4s);
          transform: rotate(90deg);
          font-size: toRem(25);
          position: relative;
          top: toRem(0.75);
          left: toRem(3);
        }

        @include breakpoint-custom-down(920) {
          margin-right: toRem(35);
        }
      }
    }

    .dropdown-menu-wrapper {
      transition: display 0.4s ease-in-out;
      background: getColor("grey-10");
      border-radius: toRem(16);
      position: absolute;
      padding: toRem(4);
      left: toRem(-100);
      top: toRem(54);
      display: none;

      @include breakpoint-custom-down(1020) {
        position: relative;
        border-radius: 0;
        width: 100%;
        padding: 0;
        left: 0;
        top: 0;
      }

      .dropdown-menu-content {
        @include flex-row-start-nowrap;
        @include transition(0.4s);
        align-items: flex-start;
        position: relative;
        gap: toRem(2.5);

        @include breakpoint-custom-down(1020) {
          @include flex-column-start-center;
          width: 100%;
        }
      }
    }

    .nav-menu-stack {
      @include flex-column-start-start;
      justify-content: flex-start;
      @include transition(0.4s);
      border-radius: toRem(16);
      padding: toRem(4);
      gap: toRem(2.5);

      @include breakpoint-custom-down(1020) {
        border-radius: 0;
        width: 100%;
        padding: 0;
        gap: 0;
      }

      .menu-stack {
        &:hover {
          background: getColor("teal-50");

          @include breakpoint-custom-down(1020) {
            background: darken(getColor("teal-50"), 4%) !important;
          }
        }
      }
    }

    .primary-stack {
      background: rgba(getColor("teal-100"), 0.75);
      height: toRem(382);

      @include breakpoint-custom-down(1020) {
        height: auto;
      }

      .menu-stack {
        min-width: toRem(260);

        &:hover {
          background: getColor("neutral-10");
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(271deg) !important;
      }

      .dropdown-menu-wrapper {
        display: unset;
      }
    }
  }
}
</style>
