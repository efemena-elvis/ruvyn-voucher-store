<template>
  <div
    class="fixed-top w-100 index-999 smooth-transition neutral-10-bg"
    :class="{ 'scrolling-up': scrolled }"
    ref="navbar"
  >
    <div class="vesicash-container">
      <div class="navigation-section smooth-transition">
        <router-link :to="{ name: 'VesicashHomeV2' }" class="brand-logo">
          <VesicashBrandLogo />
        </router-link>

        <!-- NAVIGATIONS -->
        <div class="navigations">
          <div
            class="menu-icon icon-hamburger grey-500 f-size-32 pointer"
            @click="toggleMobileDropdown"
          ></div>

          <!-- NAV ITEMS -->
          <div class="nav-items">
            <NavItem
              nav_link="#"
              nav_text="Products"
              :active_level="product_level"
              :stack="product_stack.side_stack"
              :primary_stack="getCurrentProduct.primary_stack"
              :secondary_stack="getCurrentProduct.secondary_stack"
              :is_mobile_view="is_mobile_view"
              @switchMenu="updateProductLevel"
            />
            <NavItem nav_link="/about" nav_text="About us" />
            <NavItem nav_link="/pricing-plans" nav_text="Pricing" />
            <NavItem
              nav_link="#"
              nav_text="Resources"
              :primary_stack="resource_stack.primary_stack"
            />
            <NavItem nav_link="/developers" nav_text="Developers" />
          </div>

          <!-- NAV BUTTONS -->
          <div class="nav-buttons">
            <a
              :href="`${$app_url}/login`"
              target="_blank"
              class="btn btn-tertiary btn-md roobert-500 mgr-16"
              >Sign In</a
            >

            <a
              :href="`${$app_url}/register-lander`"
              target="_blank"
              class="btn btn-primary btn-md roobert-500"
              >Create an account</a
            >
          </div>
        </div>
      </div>

      <!-- MOBILE MENU -->
      <template v-if="show_mobile_dropdown">
        <MobileMenu
          :product_level="product_level"
          :current_product_stack="getCurrentProduct"
          :product_stack="product_stack"
          :resource_stack="resource_stack"
          :sub_stack_view="sub_stack_view"
          @updateProductStack="updateProductLevel"
          @changeStackView="sub_stack_view = false"
          @closeMenu="toggleMobileDropdown"
        />
      </template>
    </div>
    <div class="scroll-indicator" :style="{ width: `${page_scrolled}%` }"></div>
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";
import NavItem from "@/modules/landing-v2/components/nav-item";

export default {
  name: "Navigation",

  components: {
    VesicashBrandLogo,
    NavItem,
    MobileMenu: () =>
      import(
        /* webpackChunkName: 'MobileMenu' */ "@/modules/landing/components/mobile-menu"
      ),
  },

  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getCurrentProduct() {
      return this.product_level === "billing"
        ? {
            primary_stack: this.is_mobile_view
              ? [
                  ...this.product_stack.primary_stack,
                  ...this.product_stack.secondary_stack,
                ]
              : this.product_stack.primary_stack,
            secondary_stack: this.is_mobile_view
              ? []
              : this.product_stack.secondary_stack,
          }
        : {
            primary_stack: this.product_stack.escrow_stack,
            secondary_stack: [],
          };
    },
  },

  data: () => ({
    page_scrolled: 0,
    show_mobile_dropdown: false,
    is_mobile_view: false,
    sub_stack_view: false,

    product_level: "billing", // escrow

    product_stack: {
      side_stack: [
        {
          title: "Billing box",
          level: "billing",
          link: "",
          description:
            "Expand sales, grow revenue with our payment infrastructure",
        },
        {
          title: "Escrow",
          level: "escrow",
          link: "",
          description: "Escrow ensures transactional security amongst parties",
        },
      ],

      primary_stack: [
        {
          icon: "central-icon.svg",
          title: "Payment options",
          link: "/payment-option",
          description: "A complete suite of payment solutions",
        },
        {
          icon: "certified-icon.svg",
          title: "Fraud prevention",
          link: "/fraud-prevention",
          description: "Mitigate risk through fraud protection and prevention.",
        },
        {
          icon: "bang-icon.svg",
          title: "Tax compliance",
          link: "/tax-compliance",
          description: "Seamless management of local tax obligations",
        },
        {
          icon: "transfer-icon.svg",
          title: "Seamless fund transfers",
          link: "/fund-transfer",
          description: "Initiate single/bulk transfers to accounts globally.",
        },
      ],

      secondary_stack: [
        {
          icon: "file-icon.svg",
          title: "B2B invoicing",
          link: "/b2b-invoicing",
          description: "Create and send payment invoices",
        },
        {
          icon: "basket-icon.svg",
          title: "Checkout",
          link: "/checkout",
          description: "Safe checkout to complete payment flow",
        },
        {
          icon: "subscription-icon.svg",
          title: "Subscriptions",
          link: "/subscription",
          description: "Enable recurring payments on a transaction",
        },
      ],

      escrow_stack: [
        {
          icon: "wallet-icon.svg",
          title: "Escrow services",
          link: "/escrow-service",
          description: "Escrow service boost payment confidence for B2B & B2C.",
        },
      ],
    },

    resource_stack: {
      primary_stack: [
        {
          icon: "file-icon.svg",
          title: "Blog",
          link: "/blogs",
          description: "Curated educational contents to help you get started",
        },
        {
          icon: "support-icon.svg",
          title: "Help and Support",
          link: "/contact",
          description: "Readily available customer support",
        },
        {
          icon: "alert-icon.svg",
          title: "F A Q",
          link: "/faqs",
          description: "Frequently asked questions and answers",
        },
      ],
    },
  }),

  mounted() {
    this.checkMobileView();
    window.onresize = () => this.checkMobileView();
    window.addEventListener("scroll", this.updateScrollExtent);

    // window.onscroll = () => {
    //   this.$refs.navbar?.classList.toggle("scrolling-up", window.scrollY > 20);
    // };
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollExtent);
  },

  methods: {
    updateScrollExtent() {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      this.page_scrolled = (window.scrollY / totalHeight) * 100;
    },

    toggleMobileDropdown() {
      this.show_mobile_dropdown = !this.show_mobile_dropdown;
    },

    updateProductLevel($event) {
      this.product_level = $event === 0 ? "billing" : "escrow";
      this.sub_stack_view = this.is_mobile_view;
    },

    checkMobileView() {
      this.is_mobile_view = window.innerWidth < 1020;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-section {
  @include flex-row-between-nowrap;
  padding: toRem(20) 0;

  .brand-logo {
    svg {
      width: toRem(150);
      height: auto;
    }
  }

  .navigations {
    @include flex-row-end-nowrap;

    .menu-icon {
      font-size: toRem(25);
      display: none;

      @include breakpoint-custom-down(1020) {
        display: unset;
      }
    }

    .nav-items {
      @include flex-row-end-nowrap;

      @include breakpoint-custom-down(1020) {
        display: none;
      }
    }

    .nav-buttons {
      @include flex-row-end-nowrap;

      @include breakpoint-custom-down(1020) {
        display: none;
      }

      .btn {
        font-size: toRem(15.75);

        @include breakpoint-custom-down(1100) {
          @include font-height(15.5, 21);
        }

        @include breakpoint-custom-down(1020) {
          @include font-height(16, 22);
        }
      }

      .btn-tertiary {
        padding: toRem(11) toRem(37);

        @include breakpoint-custom-down(920) {
          padding: toRem(12) toRem(30);
          margin-right: toRem(12);
        }
      }

      .btn-primary {
        padding: toRem(11.75) toRem(20);

        @include breakpoint-custom-down(920) {
          padding: toRem(12) toRem(15);
        }
      }
    }
  }
}

.scrolling-up {
  background: getColor("neutral-10");
  @include transition(0.3s);

  .navigation-section {
    padding: toRem(10) 0;
  }
}

.scrolling-down {
  display: none;
}

.scroll-indicator {
  height: toRem(3);
  background: getColor("teal-500");
  width: 40%;
  position: fixed;
  left: 0;
}
</style>
