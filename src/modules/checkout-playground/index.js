export default [
  {
    path: "/checkout-playground",
    component: () =>
      import(
        /* webpackChunkName: "checkout-layout" */
        "@/layouts/checkout-overview-layout"
      ),
    children: [
      {
        name: "CheckoutOverview",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/index"
          ),
        meta: {
          name: "Overview",
        },
      },
      {
        name: "PlaygroundHistory",
        path: "history",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/checkout-history"
          ),
        meta: {
          name: "Checkout History",
        },
      },
    ],
  },

  {
    path: "/subscription",
    component: () =>
      import(
        /* webpackChunkName: "checkout-layout" */
        "@/layouts/checkout-subscription-layout"
      ),
    children: [
      {
        name: "PlaygroundSubscription",
        path: "subscription",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/checkout-subscription"
          ),
        meta: {
          name: "Subscription",
        },
      },
    ],
  },

  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "checkout-layout" */
        "@/layouts/checkout-shop-layout"
      ),
    children: [
      {
        name: "CheckoutIndex",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/shop"
          ),
      },

      {
        name: "PlaygroundCart",
        path: "cart",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/playground-cart"
          ),
        meta: {
          name: "Cart",
        },
      },

         {
      path: '/payment/callback',
      name: 'payment-status',
       props: route => ({
    status: route.query.status,
    tx_ref: route.query.tx_ref,
    transaction_id: route.query.transaction_id,
  }),
      component: () => import(
           /* webpackChunkName: "checkout-layout" */
         '@/modules/checkout-playground/pages/order-status'),
    },

      {
        name: "PlaygroundCategory",
        path: ":category",
        component: () =>
          import(
            /* webpackChunkName: "checkout-layout" */
            "@/modules/checkout-playground/pages/playground-category"
          ),
        meta: {
          name: "Category",
        },
      },
    ],
  },
];
