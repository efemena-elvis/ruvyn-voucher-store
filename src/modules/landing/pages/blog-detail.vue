<template>
  <div class="blog-detail">
    <!-- BLOG HEADER BANNER -->
    <div class="blog-detail-banner teal-50-bg"></div>

    <!-- BLOG BODY -->
    <div class="blog-detail-body">
      <div class="vesicash-container">
        <div class="row">
          <div class="col-12">
            <!-- POST TITLE -->
            <template>
              <div
                v-if="postLoaded"
                class="
                  post-title
                  h1-text
                  teal-900
                  roobert-700
                  mx-auto
                  text-center
                "
                v-html="post.title.rendered"
              ></div>

              <div class="title-skeleton mgb-45 mx-auto" v-else>
                <div class="line-one skeleton-loader mgb-10"></div>
                <div class="line-two skeleton-loader"></div>
              </div>
            </template>

            <!-- POST META -->
            <template>
              <div class="post-meta grey-600 roobert-400" v-if="postLoaded">
                <div class="item">{{ getPostCategories }}</div>
                <div class="dot"></div>
                <div class="item">By Vesicash</div>
                <div class="dot"></div>
                <div class="item">{{ getPostDate }}</div>
              </div>

              <div class="meta-skeleton" v-else>
                <div class="line-one skeleton-loader"></div>
              </div>
            </template>

            <!-- POST IMAGE -->
            <template>
              <div class="post-image index-1" v-if="postLoaded">
                <img
                  v-lazy="post._embedded['wp:featuredmedia']['0'].source_url"
                  class="wt-100"
                  :alt="post._embedded['wp:featuredmedia']['0'].alt_text"
                />
              </div>

              <div class="image-skeleton" v-else>
                <div class="line-one index-1"></div>
              </div>
            </template>

            <!-- BLOG CONTENT -->
            <div class="blog-content grey-700" v-if="postLoaded">
              <div v-html="post.content.rendered"></div>
            </div>

            <!-- BLOG SOCIAL SHARE -->
            <div class="blog-social" v-if="postLoaded">
              <div
                class="
                  title
                  roobert-700
                  grey-900
                  text-center
                  primary-1-text
                  mgb-32
                "
              >
                Share this article
              </div>

              <!-- SOCIAL ICONS -->
              <div class="social-icons">
                <!-- <a href="https://www.instagram.com/vesicash/" class="social-link">
                <div class="icon icon-instagram"></div>
              </a> -->

                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${APP_BASE_URL}`"
                  class="social-link"
                >
                  <div class="icon icon-facebook"></div>
                </a>

                <a
                  :href="`https://twitter.com/intent/tweet?text=${APP_BASE_URL}`"
                  class="social-link"
                >
                  <div class="icon icon-twitter"></div>
                </a>

                <a
                  :href="`https://www.linkedin.com/shareArticle?mini=true&url=${APP_BASE_URL}`"
                  class="social-link"
                >
                  <div class="icon icon-linkedin"></div>
                </a>
              </div>
            </div>

            <!-- SUGGESTED POST -->
            <div class="suggessted-post" v-if="similar_posts.length">
              <div class="title-text roobert-700 h1-text grey-900">
                Similar posts
              </div>

              <div class="row">
                <div
                  class="col-12 col-md-4"
                  v-for="(post, index) in similar_posts"
                  :key="index"
                >
                  <BlogExcerptCard :post="post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BlogDetail",

  components: {
    BlogExcerptCard: () =>
      import(
        /* webpackChunkName: "landing-module" */ "@/modules/landing/components/blogs/blog-excerpt-card"
      ),
  },

  computed: {
    postLoaded() {
      return Object.keys(this.post).length ? true : false;
    },

    getPostCategories() {
      let categories = this.post._embedded["wp:term"][0];

      if (categories.length > 2)
        return [categories[0]?.slug, categories[1]?.slug].join(", ");
      else if (categories.length === 2)
        return [categories[0]?.slug, categories[1]?.slug].join(", ");
      else if (categories.length === 1) return [categories[0]?.slug].join(", ");
      else return false;
    },

    getPostDate() {
      return this.$date.formatDate(this.post?.date).timeDifference();
    },

    getPostContent() {},
  },

  watch: {
    postLoaded: {
      handler() {
        this.formatContent();
      },
    },
  },

  data() {
    return {
      APP_BASE_URL: "",
      post: {},
      similar_posts: [],
    };
  },

  mounted() {
    this.APP_BASE_URL = window.location.href;

    this.fetchSinglePost();
    this.loadAllPosts();
  },

  methods: {
    ...mapActions({
      getSingleBlogPost: "general/getSingleBlogPost",
      loadBlogPost: "general/loadBlogPost",
    }),

    fetchSinglePost() {
      this.getSingleBlogPost(this.$route.params.id)
        .then((response) => {
          this.post = response?.data;
        })
        .catch((err) => console.log(err));
    },

    loadAllPosts() {
      this.loadBlogPost({ page: 1 })
        .then((response) => {
          let post_data = response?.filter(
            (post) => post.id !== Number(this.$route.params.id)
          );
          let sorted_data = this.$string.sortArray(post_data);

          this.similar_posts = sorted_data.slice(0, 3);
        })
        .catch((err) => console.log(err));
    },

    formatContent() {
      this.$nextTick(() => {
        document.querySelectorAll(".blog-content").forEach((element) => {
          let children = Array.from(element?.children) ?? [];

          children?.forEach((elm) => {
            let innerChildren = Array.from(elm?.children) ?? [];

            innerChildren?.forEach((innerChild) => {
              innerChild.querySelector("strong")?.classList.add("roobert-700");

              let anchor = innerChild.querySelectorAll("a");

              if (anchor.length) {
                anchor.forEach((tag) => {
                  tag.style.fontSize = "18.5px";
                  tag.style.lineHeight = "32px";
                });
              }
            });
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-detail {
  .blog-detail-banner {
    height: toRem(576);
  }

  .blog-detail-body {
    position: relative;
    margin-top: toRem(-420);

    @include breakpoint-down(md) {
      margin-top: toRem(-440);
    }

    @include breakpoint-down(sm) {
      margin-top: toRem(-450);
    }

    .post-title {
      width: 75%;
      margin-bottom: toRem(32);

      @include breakpoint-down(xl) {
        width: 100%;
      }

      @include breakpoint-down(lg) {
        @include font-height(58, 68);
      }

      @include breakpoint-down(md) {
        @include font-height(48, 58);
        margin-bottom: toRem(24);
      }

      @include breakpoint-down(sm) {
        @include font-height(40, 52);
      }
    }

    .post-meta {
      @include font-height(17, 28);
      @include flex-row-center-wrap;
      margin-bottom: toRem(60);
      align-items: center;

      @include breakpoint-down(md) {
        margin-bottom: toRem(50);
        @include font-height(16, 26);
      }

      .dot {
        background-color: getColor("grey-500");
        @include draw-shape(5);
        margin: 0 toRem(8);
        border-radius: 50%;
        top: toRem(3);
      }
    }

    .post-image {
      background: getColor("grey-100");
      margin-bottom: toRem(60);
      position: relative;
      height: toRem(320);

      img {
        @include set-full-bg("cover");
      }
    }

    .blog-content {
      @include font-height(20, 32);
      font-family: "Roobert-Regular", sans-serif;
    }

    .blog-social {
      @include flex-column-center;
      margin-top: toRem(60);

      .social-icons {
        @include flex-row-start-nowrap;

        .social-link {
          border: toRem(1) solid getColor("grey-100");
          @include transition(0.4s);
          border-radius: toRem(40);
          margin-right: toRem(22);
          @include draw-shape(48);
          position: relative;

          .icon {
            color: getColor("teal-900");
            @include center-placement;
            @include transition(0.4s);
            font-size: toRem(22);
          }

          &:last-of-type {
            margin-right: 0;
          }

          &:hover {
            background: getColor("grey-50");

            .icon {
              color: getColor("green-600");
            }
          }
        }
      }
    }

    .suggessted-post {
      margin: toRem(140) auto toRem(60);

      @include breakpoint-down(lg) {
        margin: toRem(100) auto;
      }

      .title-text {
        margin-bottom: toRem(60);
        @include font-height(58, 68);

        @include breakpoint-down(lg) {
          @include font-height(52, 62);
        }

        @include breakpoint-down(md) {
          @include font-height(40, 48);
        }
      }
    }
  }

  .title-skeleton {
    @include flex-column-center;

    .line-one {
      width: 75%;
      height: toRem(50);
    }

    .line-two {
      width: 60%;
      height: toRem(50);
    }
  }

  .meta-skeleton {
    @include flex-column-center;
    margin-bottom: toRem(50);

    .line-one {
      width: 40%;
      height: toRem(25);
    }
  }

  .image-skeleton {
    @include flex-column-center;
    margin-bottom: toRem(60);

    .line-one {
      background: rgba(getColor("grey-100"), 0.65);
      width: 100%;
      height: toRem(300);
      opacity: 1;
    }
  }
}
</style>