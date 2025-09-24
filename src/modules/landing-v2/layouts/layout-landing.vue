<template>
  <div>
    <!-- TOP NAVIGATION -->
    <Navigation :key="$route.fullPath" :scrolled="scrolled" />

    <MessageBanner
      v-for="(banner, index) in banners"
      :key="index + banner.position"
      v-bind="banner"
      :scrolled="scrolled"
      @close="closeBanner(index)"
    />

    <!-- BODY SECTION -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER SECTION -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "@/modules/landing-v2/components/navigation";
import Footer from "@/modules/landing-v2/components/footer";
import MessageBanner from "@/shared/components/message-banner";

export default {
  name: "LayoutLanding",

  components: {
    Navigation,
    Footer,
    MessageBanner,
  },

  computed: {
    ...mapGetters({ getPageLayout: "cms/getPageLayout" }),

    alertBanners() {
      return this.getPageLayout?.banners?.length
        ? this.getPageLayout?.banners?.filter((banner) => banner.show_banner)
        : [];
    },
  },

  mounted() {
    this.$color.setPageBackgroundColor("#ffffff");

    window.onscroll = () => {
      this.scrolled = window.scrollY > 20;
    };

    if (!this.getPageLayout) this.fetchPageLayout();
  },

  watch: {
    alertBanners: {
      handler(banners) {
        this.banners = [...banners];
      },
      immediate: true,
    },
  },

  data() {
    return {
      scrolled: false,
      banners: [],
    };
  },

  methods: {
    ...mapActions({ fetchPageLayout: "cms/fetchPageLayout" }),

    closeBanner(index) {
      this.banners.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
