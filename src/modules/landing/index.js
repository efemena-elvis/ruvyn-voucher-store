// ================================
// VESICASH LANDING PAGE ROUTES
// ================================
const landingRoutes = [
  {
    path: "/homepage",
    // alias: "/home",
    component: () =>
      import(
        /* webpackChunkName: "landing-layout" */
        "@/modules/landing/layouts/layout-landing"
      ),

    children: [
      // ===============================
      // VESICASH HOME ROUTE
      // ===============================
      {
        path: "",
        name: "VesicashHome",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/home"
          ),
      },

      // ===============================
      // VESICASH SOLUTIONS ROUTE
      // ===============================
      {
        path: "/solutions",
        name: "VesicashSolutions",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/solutions"
          ),
      },

      // ===============================
      // VESICASH ABOUT US ROUTE
      // ===============================
      {
        path: "/about",
        name: "VesicashAbout",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/about"
          ),
      },

      // ===============================
      // VESICASH CONTACT ROUTE
      // ===============================
      {
        path: "/contact",
        name: "VesicashContact",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/contact"
          ),
      },

      // ===============================
      // VESICASH BLOG ROUTE
      // ===============================
      // {
      //   path: "/blog",
      //   name: "VesicashBlog",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "landing-module" */ "@/modules/landing/pages/blogs"
      //     ),
      // },

      // ===============================
      // VESICASH BLOG DETAIL ROUTE
      // ===============================
      // {
      //   path: "/blog-detail/:id",
      //   name: "VesicashBlogDetail",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "landing-module" */ "@/modules/landing/pages/blog-detail"
      //     ),
      // },

      // ===============================
      // VESICASH DEVELOPERS ROUTE
      // ===============================
      {
        path: "/developers",
        name: "VesicashDeveloper",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/developers"
          ),
      },

      // ===============================
      // VESICASH FAQ ROUTE
      // ===============================
      {
        path: "/faqs",
        name: "VesicashFAQ",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/faq"
          ),
      },

      // =======================================
      // VESICASH TERMS AND CONDITION ROUTE
      // =======================================
      {
        path: "/terms",
        name: "VesicashTerms",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/terms"
          ),
      },

      // =======================================
      // VESICASH PRIVACY POLICY ROUTE
      // =======================================
      {
        path: "/privacy-policy",
        name: "VesicashPrivacy",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/privacy"
          ),
      },

      // =======================================
      // VESICASH COMING SOON ROUTE
      // =======================================
      {
        path: "/coming-soon",
        name: "VesicashComingSoon",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/coming-soon"
          ),
      },
    ],
  },

  // ===============================
  // VESICASH STATUS ROUTE
  // ===============================
  {
    path: "/status",
    name: "VesicashStatus",
    component: () =>
      import(
        /* webpackChunkName: "landing-module" */
        "@/modules/landing/pages/status"
      ),
  },
];

export default landingRoutes;
