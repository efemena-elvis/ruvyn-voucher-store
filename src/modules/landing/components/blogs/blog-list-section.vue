<template>
  <div class="blog-list-section">
    <div class="vesicash-container">
      <div class="row">
        <template>
          <template v-if="posts.length">
            <div
              class="col-12 col-sm-6"
              v-for="(post, index) in posts"
              :key="index"
            >
              <BlogPostCard :post="post" />
            </div>
          </template>

          <template v-else>
            <div class="col-12 col-sm-6" v-for="(_, index) in 4" :key="index">
              <BlogSkeletonCard />
            </div>
          </template>
        </template>

        <!-- 
        <div class="col-12 col-sm-4">
          <BlogPostCard card_type="multiple" />
        </div>
         -->
      </div>

      <div class="col-12" v-if="paging.total_pages > 1">
        <Pagination
          :pagination="{
            current_page: paging.current_page,
            per_page: paging.per_page,
            last_page: paging.total_pages,
            from: startPage,
            to: endPage,
            total: paging.total_post,
          }"
          :remove_padding="true"
          @goToPage="loadNextPagePost($event)"
        />
      </div>

      <!-- BLOG NEWSLETTER -->
      <BlogNewsletter v-if="false" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BlogSkeletonCard from "@/modules/landing/components/blogs/blog-skeleton-card";
import BlogPostCard from "@/modules/landing/components/blogs/blog-post-card";

export default {
  name: "BlogListSection",

  components: {
    BlogSkeletonCard,
    BlogPostCard,
    BlogNewsletter: () =>
      import(
        /* webpackChunkName: "landing-module" */ "@/modules/landing/components/blogs/blog-newsletter"
      ),
    Pagination: () =>
      import(
        /* webpackChunkName: "shared-module" */ "@/shared/components/pagination"
      ),
  },

  computed: {
    ...mapGetters({
      getBlogPost: "general/getBlogPost",
      getBlogPaging: "general/getBlogPaging",
    }),

    startPage() {
      return this.paging.current_page * this.paging.per_page - 9;
    },

    endPage() {
      return this.posts.length;
    },
  },

  watch: {
    getBlogPost: {
      handler() {
        this.posts = this.getBlogPost;
        this.paging = this.getBlogPaging;
      },
      immediate: true,
      deep: true,
    },
  },

  data() {
    return {
      page: 1,
      posts: [],
      paging: {},
    };
  },

  created() {
    this.loadAllPosts();
  },

  methods: {
    ...mapActions({ loadBlogPost: "general/loadBlogPost" }),

    // ==============================
    // LOAD ALL POST DATA
    // ==============================
    loadAllPosts() {
      this.loadBlogPost({ page: this.page }).catch((err) => console.log(err));
    },

    loadNextPagePost(page) {
      this.posts = [];
      window.scrollTo(0, 300);

      this.loadBlogPost({ page })
        .then(() => {})
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-list-section {
  padding: toRem(120) 0 toRem(40);

  @include breakpoint-down(lg) {
    padding: toRem(70) 0 0;
  }

  .vesicash-container {
    padding: 0 toRem(50);

    @include breakpoint-down(lg) {
      padding: 0 toRem(32);
    }

    @include breakpoint-down(sm) {
      padding: 0 toRem(24);
    }

    @include breakpoint-down(xs) {
      padding: 0 toRem(16);
    }
  }
}
</style>