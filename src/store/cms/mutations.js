export default {
  SAVE_HOME_PAGE: (state, data) => (state.home_page = data),
  SAVE_ABOUT_PAGE: (state, data) => (state.about_page = data),
  SAVE_TERMS_PAGE: (state, data) => (state.terms_page = data),
  SAVE_PAYMENT_OPTIONS_PAGE: (state, data) =>
    (state.payment_options_page = data),
  SAVE_FRAUD_PREVENTION_PAGE: (state, data) =>
    (state.fraud_prevention_page = data),
  SAVE_TAX_COMPLIANCE_PAGE: (state, data) => (state.tax_compliance_page = data),
  SAVE_FUND_TRANSFERS_PAGE: (state, data) => (state.fund_transfers_page = data),
  SAVE_B2B_INVOICING_PAGE: (state, data) => (state.b2b_invoicing_page = data),
  SAVE_CHECKOUT_PAGE: (state, data) => (state.checkout_page = data),
  SAVE_SUBSCRIPTION_PAGE: (state, data) => (state.subscription_page = data),
  SAVE_ESCROW_PAGE: (state, data) => (state.escrow_page = data),
  SAVE_PAGE_LAYOUT: (state, data) => (state.page_layout = data),
};
