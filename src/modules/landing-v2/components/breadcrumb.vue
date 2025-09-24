<template>
  <div
    class="breadcrumb-wrapper vesicash-container"
    v-if="normalizedLinks.length"
  >
    <div
      class="link-wrapper"
      v-for="(link, index) in normalizedLinks"
      :key="index"
    >
      <div class="tertiary-2-text green-300" v-if="index === lastLinkIndex">
        {{ link.name }}
      </div>

      <template v-else-if="link.path">
        <router-link
          :class="[
            'tertiary-2-text',
            theme === 'dark' ? 'grey-900' : 'neutral-10',
          ]"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
        <span
          class="icon icon-caret-right primary-1-text"
          :class="[theme === 'dark' ? 'grey-900' : 'neutral-10']"
        ></span>
      </template>

      <template v-else>
        <div
          :class="[
            'tertiary-2-text',
            theme === 'dark' ? 'grey-900' : 'neutral-10',
          ]"
        >
          {{ link.name }}
        </div>
        <span
          class="icon icon-caret-right primary-1-text"
          :class="[theme === 'dark' ? 'grey-900' : 'neutral-10']"
        ></span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",

  props: {
    links: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: "dark",
    },
  },

  computed: {
    normalizedLinks() {
      return this.links?.length
        ? this.links.map((link) => {
            const normalizedLink = this.normaliseUrl(link.path);
            return {
              ...link,
              path: normalizedLink,
            };
          })
        : [];
    },

    lastLinkIndex() {
      return this.links?.length - 1;
    },
  },

  methods: {
    normaliseUrl(url) {
      if (!url) return "";

      return url.startsWith("/") ||
        url.startsWith("http") ||
        url.startsWith("mailto") ||
        url.startsWith("tel") ||
        url.startsWith("#")
        ? url
        : `/${url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
  @include flex-row-start-nowrap;
  gap: 0 toRem(6);
  position: relative;
  top: toRem(25);
  .link-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 0 toRem(4);
  }
}
</style>
