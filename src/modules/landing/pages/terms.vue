<template>
  <div class="terms-page">
    <div class="vesicash-container" v-if="getTermsPage">
      <div class="section-wrapper" v-html="getTermsPage"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TermsOfUse",

  metaInfo: {
    title: "Terms and Conditions",
  },

  async mounted() {
    await this.fetchTermsPage();
  },

  methods: {
    ...mapActions({ fetchTermsPage: "cms/fetchTermsPage" }),
  },

  computed: {
    ...mapGetters({ getTermsPage: "cms/getTermsPage" }),
  },
};
</script>

<style lang="scss">
.terms-page {
  min-height: 100vh;
  .section-wrapper {
    margin: auto toRem(92);

    @include breakpoint-down(lg) {
      margin: auto toRem(72);
    }

    @include breakpoint-down(md) {
      margin: auto;
    }

    a {
      text-decoration: underline;
      color: #696f6e;
      text-decoration-color: rgba(
        var(--bs-link-color-rgb),
        var(--bs-link-underline-opacity, 1)
      ) !important;
      &:hover {
        text-decoration: none;
      }
    }

    .header-text,
    h1 {
      font-family: "Roobert", sans-serif;
      &:first-child {
        @include font-height(72, 82);
        margin: toRem(180) auto toRem(60);
        text-align: center;
        color: getColor("teal-900");

        @include breakpoint-down(xl) {
          @include font-height(64, 72);
        }

        @include breakpoint-down(lg) {
          margin: toRem(180) auto toRem(60);
        }

        @include breakpoint-down(md) {
          margin: toRem(140) auto toRem(40);
          @include font-height(40, 48);
        }
      }
    }

    .sub-header-text {
      margin-bottom: toRem(60);

      @include breakpoint-down(md) {
        @include font-height(18, 28);
      }
    }

    .title-text,
    h2 {
      font-family: "Roobert-Bold", sans-serif;
      @include generate-font-type("h3");
      color: getColor("grey-900");
      margin-bottom: toRem(16);

      @include breakpoint-down(md) {
        @include generate-font-type("h4");
      }
    }

    .sub-title-text,
    h5 {
      font-family: "Roobert-Bold", sans-serif;
      @include generate-font-type("h7");
      color: getColor("grey-900");
      margin-bottom: toRem(8);

      @include breakpoint-down(md) {
        @include font-height(18, 28);
      }
    }

    .content-text,
    p,
    li {
      font-family: "Roobert-Regular", sans-serif;
      @include generate-font-type("h7");
      color: getColor("grey-700");
      line-height: toRem(31);

      @include breakpoint-down(md) {
        @include font-height(18, 28);
      }

      a {
        @include generate-font-type("h7");
        color: getColor("grey-600");

        @include breakpoint-down(md) {
          @include font-height(18, 28);
        }
      }
    }

    ol {
      & + ul {
        margin-left: 60px;
      }
    }
    ul {
      & + ol {
        margin-left: 30px;
        list-style: lower-alpha;
      }
    }
  }

  span.indent {
    margin-left: 30px;
    border: 1px solid red;
  }

  .margin-24 {
    margin-bottom: toRem(24);
  }

  .margin-32 {
    margin-bottom: toRem(32);
  }
}
</style>
