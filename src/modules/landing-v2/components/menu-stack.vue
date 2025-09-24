<template>
  <router-link
    :to="menu.link"
    @mouseover.native="!is_mobile_view && $emit('switchNavigation')"
    @click.native="$emit('switchNavigation')"
    class="menu-stack overflow-hidden"
    :class="[
      isActiveSideStack ? 'active-side-stack' : null,
      $route.path === menu.link ? 'active-stack' : null,
    ]"
  >
    <div class="img-icon" v-if="menu.icon">
      <img v-lazy="loadImage(menu.icon, 'landing-v2')" alt="" />
    </div>

    <div class="text-container w-100">
      <div class="text-content">
        <div>
          <!-- TITLE TEXT -->
          <div class="title-text primary-1-text roobert-600 teal-900">
            {{ menu.title }}
          </div>

          <!-- DESCRIPTION TEXT -->
          <div class="description-text primary-2-text roobert-400 grey-700">
            {{ menu.description }}
          </div>
        </div>
      </div>

      <div class="icon icon-caret-right grey-500" v-if="active_level"></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MenuStack",

  props: {
    menu: {
      type: Object,
      default: () => ({
        icon: "",
        link: "",
        level: "",
        title: "Billing box",
        description:
          "Expand sales, grow revenue with our payment infrastructure",
      }),
    },

    active_level: {
      type: String,
    },

    is_mobile_view: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isActiveSideStack() {
      return this.active_level === this.menu.level ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-stack {
  border: toRem(1) solid transparent;
  @include flex-row-between-nowrap;
  padding: toRem(12) toRem(16);
  @include transition(0.4s);
  border-radius: toRem(14);
  align-items: flex-start;
  min-width: toRem(270);
  width: auto;

  @include breakpoint-custom-down(1020) {
    border-bottom: toRem(1) solid lighten(getColor("grey-100"), 2%);
    background: getColor("teal-50") !important;
    @include flex-row-start-nowrap;
    padding: toRem(14) toRem(16);
    align-items: flex-start;
    border-radius: 0;
    min-width: unset;
    width: 100%;
  }

  .img-icon {
    @include draw-shape(28);
    margin-right: toRem(16);
    position: relative;

    @include breakpoint-down(sm) {
      @include draw-shape(23);
      margin-right: toRem(13);
    }

    img {
      @include set-full-bg;
    }
  }

  .text-container {
    @include flex-row-between-nowrap;
    align-items: center;
    gap: toRem(2);

    .text-content {
      @include flex-column-start-start;
      gap: toRem(5);

      .title-text {
        @include breakpoint-down(sm) {
          font-size: toRem(15.5);
        }
      }

      .description-text {
        @include breakpoint-down(sm) {
          font-size: toRem(13.75);
        }
      }
    }

    .icon {
      font-size: toRem(24);
      position: relative;
      right: toRem(-12);

      @include breakpoint-custom-down(1020) {
        font-size: toRem(26);
        right: 0;
      }
    }
  }

  &.active-side-stack {
    background: getColor("neutral-10");
  }

  &.active-stack {
    background: getColor("teal-50");
  }
}
</style>
