const playGroundRoutes = [
  // =====================================
  // PLAYGROUND CREATION FLOW
  // =====================================
  {
    path: "/playground/setup",
    component: () =>
      import(
        /* webpackChunkName: "transaction-layout" */
        "@/modules/transactions/layouts/layout-transactions"
      ),

    children: [
      {
        path: "",
        name: "TransactionSetup",
        component: () =>
          import(
            /* webpackChunkName: "transaction-layout" */
            "@/modules/transactions/pages/create-transactions/transaction-setup"
          ),
      },

      {
        path: "/playground/parties",
        name: "TransactionParties",
        component: () =>
          import(
            /* webpackChunkName: "transaction-layout" */
            "@/modules/transactions/pages/create-transactions/transaction-parties"
          ),
      },

      {
        path: "/playground/payout-rules",
        name: "TransactionPayoutRules",
        component: () =>
          import(
            /* webpackChunkName: "transaction-layout" */
            "@/modules/transactions/pages/create-transactions/transaction-payout-rules"
          ),
      },

      {
        path: "/playground/confirm-transaction",
        name: "TransactionConfirmPayout",
        component: () =>
          import(
            /* webpackChunkName: "transaction-layout" */
            "@/modules/transactions/pages/create-transactions/transaction-confirmation"
          ),
      },

      {
        path: "/playground/payment",
        name: "TransactionPayment",
        component: () =>
          import(
            /* webpackChunkName: "transaction-layout" */
            "@/modules/transactions/pages/create-transactions/transaction-payment"
          ),
      },
    ],
  },

  // ====================================
  // PLAIN AUTH BG LAYOUT ROUTES
  // ====================================
  {
    path: "/playground/payment-successful",
    component: () =>
      import(/* webpackChunkName: "auth-layout" */ "@/layouts/layout-auth"),

    children: [
      {
        path: "",
        name: "SuccessfulPayment",
        component: () =>
          import(
            /* webpackChunkName: "transaction-module" */
            "@/modules/transactions/pages/create-transactions/transaction-payment-success"
          ),
      },
    ],
  },
];

export default playGroundRoutes;
