<template>
  <div class="blog-skeleton-card">
    <div class="blog-image-skeleton skeleton-loader mgb-32"></div>
    <div class="blog-title-skeleton skeleton-loader mgb-18"></div>
    <div class="blog-meta-skeleton skeleton-loader"></div>
  </div>
</template>

<script>
export default {
  name: "blogSkeletonCard",
};
</script>

<style lang="scss" scoped>
.blog-skeleton-card {
  margin-bottom: toRem(60);

  .blog-image-skeleton {
    height: toRem(380);

    @include breakpoint-down(lg) {
      height: toRem(340);
    }

    @include breakpoint-down(md) {
      height: toRem(250);
    }
  }

  .blog-title-skeleton {
    height: toRem(25);
    width: 80%;
  }

  .blog-meta-skeleton {
    height: toRem(15);
    width: 60%;
  }
}
</style>