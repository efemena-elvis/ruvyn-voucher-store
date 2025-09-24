<template>
  <a :href="`/blog-detail/${post.id}?title=${post.title.rendered}`">
    <div class="blog-excerpt-card rounded-16 mgb-32">
      <!-- BLOG IMAGE -->
      <div class="blog-image rounded-8 overflow-hidden mgb-32">
        <img
          v-lazy="post._embedded['wp:featuredmedia']['0'].source_url"
          class="wt-100"
          :alt="post._embedded['wp:featuredmedia']['0'].alt_text"
        />
      </div>

      <!-- BLOG META -->
      <div class="blog-meta grey-900 roobert-400 mgb-16">
        {{ getPostCategories }}
      </div>

      <!-- BLOG TITLE -->
      <div
        class="blog-title grey-900 roobert-700 mgb-16 h3-text"
        :title="post.title.rendered"
        v-html="post.title.rendered"
      ></div>

      <!-- BLOG DESCRIPTION -->
      <div
        class="blog-description grey-700 roobert-400"
        v-html="post.excerpt.rendered"
      ></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "BlogExcerptCard",

  props: {
    post: {
      type: Object,
    },
  },

  computed: {
    getPostCategories() {
      let categories = this.post._embedded["wp:term"][0];

      if (categories.length > 2)
        return [categories[0]?.slug, categories[1]?.slug].join(", ");
      else if (categories.length === 2)
        return [categories[0]?.slug, categories[1]?.slug].join(", ");
      else if (categories.length === 1) return [categories[0]?.slug].join(", ");
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-excerpt-card {
  border: toRem(0.5) solid getColor("grey-200");
  padding: toRem(24);

  @include breakpoint-down(lg) {
    padding: toRem(18);
  }

  .blog-image {
    background: getColor("grey-100");
    position: relative;
    height: toRem(270);

    @include breakpoint-down(lg) {
      height: toRem(240);
    }

    @include breakpoint-down(sm) {
      height: toRem(260);
    }

    img {
      @include set-full-bg("cover");
    }
  }

  .blog-meta {
    @include font-height(20, 28);

    @include breakpoint-down(lg) {
      @include font-height(18, 26);
    }
  }

  .blog-title {
    @include line-clamp(2);

    @include breakpoint-down(lg) {
      @include font-height(24, 32);
    }
  }

  .blog-description {
    @include line-clamp(5);

    @include font-height(20, 28);

    @include breakpoint-down(lg) {
      @include font-height(18, 26);
    }
  }
}
</style>