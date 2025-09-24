// ================================
// VESICASH LANDING PAGE ROUTES
// ================================
const landingRoutes = [
  {
    path: "/old-home",
    alias: "/old-home",
    component: () =>
      import(
        /* webpackChunkName: "landing-layout" */
        "@/modules/landing-v2/layouts/layout-landing"
      ),

    children: [
      // ===============================
      // VESICASH HOME ROUTE
      // ===============================
      {
        path: "",
        name: "VesicashHomeV2",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/home"
          ),
      },
      {
        path: "/fraud-prevention",
        name: "FraudPrevention",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/fraud-prevention"
          ),
      },
      {
        path: "/tax-compliance",
        name: "TaxCompliance",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/tax-compliance"
          ),
      },
      {
        path: "/fund-transfer",
        name: "FundTransfer",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/fund-transfer"
          ),
      },
      {
        path: "/payment-option",
        name: "PaymentOption",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/payment-option"
          ),
      },
      {
        path: "/subscription",
        name: "Subscription",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/subscription"
          ),
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/checkout"
          ),
      },
      {
        path: "/b2b-invoicing",
        name: "B2BInvoicing",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/invoicing"
          ),
      },
      {
        path: "/escrow-service",
        name: "EscrowService",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/escrow"
          ),
      },
      {
        path: "/pricing-plans",
        name: "Pricing",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/pricing-plan"
          ),
      },
      {
        path: "/blogs",
        name: "Blog",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing-v2/pages/blogs"
          ),
      },
    ],
  },
];

export default landingRoutes;
