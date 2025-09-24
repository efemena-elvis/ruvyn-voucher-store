<template>
  <router-link
    :to="{
      name: 'VesicashBlogDetail',
      params: { id: post.id },
      query: { title: post.title.rendered },
    }"
  >
    <div class="blog-post-card pointer smooth-transition">
      <!-- BLOG IMAGE -->
      <div
        class="blog-image mgb-32"
        :class="card_type === 'single' ? 'blog-image-by-2' : 'blog-image-by-3'"
      >
        <img
          v-lazy="post._embedded['wp:featuredmedia']['0'].source_url"
          class="wt-100"
          :alt="post._embedded['wp:featuredmedia']['0'].alt_text"
        />
      </div>

      <!-- BLOG TITLE -->
      <div
        class="blog-title h3-text roobert-700 teal-900 mgb-16"
        :title="post.title.rendered"
        v-html="post.title.rendered"
      ></div>

      <!-- BLOG META -->
      <div class="blog-meta h7-text roobert-400 grey-600">
        <template v-if="getPostCategories">
          <div class="category">{{ getPostCategories }}</div>
          <div class="dot rounded-circle grey-500-bg"></div>
        </template>
        <div class="author">By Vesicash</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogPostCard",

  props: {
    post: {
      type: Object,
    },

    card_type: {
      type: String,
      default: "single",
    },
  },

  computed: {
    getPostCategories() {
      let categories = this.post._embedded["wp:term"][0];

      if (categories.length > 2)
        return [
          categories[0]?.slug,
          categories[1]?.slug,
          categories[2]?.slug,
        ].join(", ");
      else if (categories.length === 2)
        return [categories[0]?.slug, categories[1]?.slug].join(", ");
      else if (categories.length === 1) return [categories[0]?.slug].join(", ");
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-post-card {
  margin-bottom: toRem(60);

  &:hover {
    transform: scale(0.98);
  }

  .blog-image {
    background: rgba(getColor("grey-100"), 0.5);
    position: relative;

    &-by-2 {
      height: toRem(380);

      @include breakpoint-down(lg) {
        height: toRem(340);
      }

      @include breakpoint-down(md) {
        height: toRem(250);
      }

      @include breakpoint-down(sm) {
        height: toRem(320);
      }

      @include breakpoint-down(xs) {
        height: toRem(280);
      }
    }

    &-by-3 {
      height: toRem(260);
    }

    img {
      @include set-full-bg("cover");
    }
  }

  .blog-title {
    @include line-clamp(2);

    @include breakpoint-down(lg) {
      @include font-height(28, 36);
    }

    @include breakpoint-down(md) {
      @include font-height(22, 32);
    }

    @include breakpoint-down(sm) {
      @include font-height(26, 34);
    }
  }

  .blog-meta {
    @include flex-row-start-wrap;
    align-items: center;
    font-size: toRem(18);

    @include breakpoint-down(md) {
      @include font-height(17, 28);
    }

    @include breakpoint-down(sm) {
      @include font-height(18, 28);
    }

    .dot {
      @include draw-shape(5);
      margin: 0 toRem(8);
    }
  }
}
</style>