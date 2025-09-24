<template>
  <div
    class="banner-container tertiary-2-text"
    :class="{
      'banner-container-2': scrolled && position === 'Top',
      'bottom-container': position === 'Bottom',
      'top-container': position === 'Top',
    }"
  >
    <div class="message-block" v-html="message"></div>

    <div
      class="icon icon-close"
      v-if="can_close_banner"
      @click="$emit('close')"
    ></div>
  </div>
</template>

<script>
export default {
  name: "MessageBanner",

  props: {
    message: {
      type: String,
      default: "",
    },

    can_close_banner: {
      type: Boolean,
      default: true,
    },

    position: {
      type: String,
      default: "Top",
    },

    scrolled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-container {
  position: fixed;
  width: 100%;
  background: getColor("teal-800");
  color: getColor("neutral-10");
  padding-top: toRem(16);
  z-index: 99;
  transition: all ease-in-out 0.3s;

  @include breakpoint-down(md) {
    padding-top: toRem(36);
    padding-bottom: toRem(10);
  }

  .message-block {
    width: 75%;
    margin: auto;
    text-align: center;

    @include breakpoint-down(lg) {
      width: 85%;
    }

    @include breakpoint-down(md) {
      width: 100%;
    }
  }

  .icon {
    @include center-placement("y-axis");
    right: toRem(20);
    font-size: toRem(20);
    cursor: pointer;
    transition: color ease 0.25s;

    &:hover {
      color: getColor("red-400");
    }

    @include breakpoint-down(md) {
      top: toRem(24);
    }
  }
}

.top-container {
  top: toRem(80);

  @include breakpoint-down(lg) {
    top: toRem(80);
  }
}

.bottom-container {
  bottom: 0;
}

.banner-container-2 {
  top: toRem(65);

  @include breakpoint-down(lg) {
    top: toRem(45);
  }

  @include breakpoint-down(md) {
    top: toRem(45);
    display: none;
  }
}
</style>
