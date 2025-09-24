<template>
  <div class="page-container">
    <template v-if="!loading && getAboutPage">
      <!-- ABOUT HERO SECTION -->
      <AboutHeroSection />

      <!-- ABOUT VALUES SECTION -->
      <AboutValues />

      <!-- SOLUTION CTA SECTION -->
      <SolutionCTA />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AboutHeroSection from "@/modules/landing/components/about/about-hero-section";
import AboutValues from "@/modules/landing/components/about/about-values";

export default {
  name: "AboutPage",

  metaInfo: {
    title: "About Us",
  },

  components: {
    AboutHeroSection,
    AboutValues,
    SolutionCTA: () =>
      import(
        /* webpackChunkName: "landing-module" */ "@/modules/landing/components/solutions/solution-cta"
      ),
  },

  async created() {
    this.loading = true;
    await this.fetchAboutPage();
    this.loading = false;
  },

  computed: {
    ...mapGetters({ getAboutPage: "cms/getAboutPage" }),
  },

  data() {
    return {
      res: "",
      loading: false,
    };
  },

  methods: {
    ...mapActions({
      fetchAboutPage: "cms/fetchAboutPage",
    }),
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 80vh;
}
</style>
