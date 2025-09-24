import { app } from "../../main";
import {
  getHeroSectionSlice,
  getHeroSectionSliceII,
  getSecondaryHeroSectionSlice,
  getSecondaryHeroSectionWithBenefitsSlice,
  getSecondaryHeroSectionSliceII,
  getBenefitsSectionSlice,
  getListedBenefitsSectionSlice,
  getOnboardingSlice,
  getAlertBannerSlices,
  getBreadcrumbSlice,
  pageMeta,
} from "../../utilities/prismic-utils";
import * as prismicH from "@prismicio/helpers";

export default {
  async fetchHomePage({ commit }) {
    window?.NProgress && window?.NProgress.start();

    const response = await app.$prismic.client.getSingle("home_page");

    window?.NProgress && window?.NProgress.done();

    if (response?.data) {
      const res = response.data;
      const meta = pageMeta(res);
      console.log({ meta, res });

      const home = {
        hero_title: prismicH.asText(res.title),
        hero_description: prismicH.asText(res.description),
        mor_title: prismicH.asText(res.mor_title),
        vesicash_mor: prismicH.asText(res.vesicash_mor),
        why_vesicash_mor: prismicH.asText(res.why_vesicash_mor),
        mor_services: res.mor_services?.map((service) =>
          prismicH.asText(service.service_title)
        ),
        mor_extra_benefit: prismicH.asText(res.extra_benefit),
        payment_title: prismicH.asText(res.payment_title),
        payment_subtitle: prismicH.asText(res.payment_subtitle),
        payment_description: prismicH.asText(res.payment_description),
        payment_services: res.payment_services?.map((service) => ({
          icon: prismicH.asImageSrc(service.icon),
          title: prismicH.asText(service.service_title),
          description: prismicH.asText(service.service_description),
        })),
        partner_title: prismicH.asText(res.partner_title),
        partner_description: prismicH.asText(res.partner_description),
        partners: res.partners?.map((partner) =>
          prismicH.asImageSrc(partner.partner_logo)
        ),
        escrow_title: prismicH.asText(res.escrow_title),
        escrow_description: prismicH.asText(res.escrow_description),
        escrow_benefits: res.escrow_benefits?.map((benefit) => ({
          icon: prismicH.asImageSrc(benefit.benefit_icon),
          title: prismicH.asText(benefit.benefit_title),
          description: prismicH.asText(benefit.benefit_description),
        })),
        api_title: prismicH.asText(res.api_title),
        api_description: prismicH.asText(res.api_description),
        onboard_title: prismicH.asText(res.onboard_title),
        onboard_description: prismicH.asText(res.onboard_description),
        labels: {
          view_doc_title: prismicH.asText(res.view_documentation_title),
          contact_sales_cta_title: prismicH.asText(res.contact_sales_cta_title),
          sign_up_cta_title: prismicH.asText(res.create_account_cta_title),
        },
        meta,
      };

      commit("SAVE_HOME_PAGE", home);
    }
    return response;
  },

  async fetchAboutPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("about_page");
    window?.NProgress && window?.NProgress.done();

    if (response?.data) {
      const about = {
        hero_title_1: prismicH.asText(response.data?.hero_title_1),
        hero_title_2: prismicH.asText(response.data?.hero_title_2),
        hero_description: prismicH.asText(response.data?.hero_description),
        value_title: prismicH.asText(response.data?.value_title),
        values: response.data?.values?.map((value) => ({
          index: prismicH.asText(value.index),
          title: prismicH.asText(value.value_title),
          description: prismicH.asText(value.value_description),
        })),
        service_title: prismicH.asText(response.data?.service_title),
        service_description: prismicH.asText(
          response.data?.service_description
        ),
        labels: {
          view_doc_cta: prismicH.asText(response.data?.view_doc_button_title),
          contact_cta: prismicH.asText(response.data?.contact_button_title),
        },
      };
      commit("SAVE_ABOUT_PAGE", about);
    }
    return response;
  },

  async fetchTermsPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("vesicash_terms");
    window?.NProgress && window?.NProgress.done();
    if (response?.data)
      commit("SAVE_TERMS_PAGE", prismicH.asHTML(response?.data?.terms));
    console.log("HERE SEE", response?.data?.terms);
    return response;
  },

  async fetchPaymentOptionsPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("payment_option_page");
    window?.NProgress && window?.NProgress.done();

    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;

      const hero_section = getHeroSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);
      const breadcrumb = getBreadcrumbSlice(slices);
      const meta = pageMeta(res);

      const page = {
        hero_section,
        benefits_section,
        onboarding_section,
        breadcrumb,
        meta,
      };
      commit("SAVE_PAYMENT_OPTIONS_PAGE", page);
    }
    return response;
  },

  async fetchFraudPreventionPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle(
      "fraud_prevention_page"
    );
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const secondary_hero_section = getSecondaryHeroSectionSlice(slices);
      const listed_benefit_section = getListedBenefitsSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);
      const breadcrumb = getBreadcrumbSlice(slices);

      const page = {
        hero_section,
        secondary_hero_section,
        listed_benefit_section,
        benefits_section,
        onboarding_section,
        breadcrumb,
      };
      commit("SAVE_FRAUD_PREVENTION_PAGE", page);
    }
    return response;
  },

  async fetchTaxCompliancePage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("tax_compliance_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const listed_benefit_section = getListedBenefitsSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);
      const breadcrumb = getBreadcrumbSlice(slices);

      const page = {
        hero_section,
        listed_benefit_section,
        benefits_section,
        onboarding_section,
        breadcrumb,
      };
      commit("SAVE_TAX_COMPLIANCE_PAGE", page);
    }
    return response;
  },

  async fetchFundTransfersPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("fund_transfers_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);
      const breadcrumb = getBreadcrumbSlice(slices);

      const page = {
        hero_section,
        benefits_section,
        onboarding_section,
        breadcrumb,
      };
      commit("SAVE_FUND_TRANSFERS_PAGE", page);
    }
    return response;
  },

  async fetchB2BInvoicingPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("b2b_invoicing_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const secondary_hero_section = getSecondaryHeroSectionSlice(slices);
      const secondary_hero_section_ii = getSecondaryHeroSectionSliceII(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);

      const page = {
        hero_section,
        secondary_hero_section,
        secondary_hero_section_ii,
        benefits_section,
        onboarding_section,
      };
      commit("SAVE_B2B_INVOICING_PAGE", page);
    }
    return response;
  },

  async fetchCheckoutPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("checkout_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const hero_section_ii = getHeroSectionSliceII(slices);
      const secondary_hero_section = getSecondaryHeroSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);

      const page = {
        hero_section,
        hero_section_ii,
        secondary_hero_section,
        benefits_section,
        onboarding_section,
      };
      commit("SAVE_CHECKOUT_PAGE", page);
    }
    return response;
  },

  async fetchSubscriptionPage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("subscription_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const secondary_hero_section =
        getSecondaryHeroSectionWithBenefitsSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);

      const page = {
        hero_section,
        secondary_hero_section,
        benefits_section,
        onboarding_section,
      };
      commit("SAVE_SUBSCRIPTION_PAGE", page);
    }
    return response;
  },

  async fetchEscrowServicePage({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("escrow_service_page");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res?.body;
      const hero_section = getHeroSectionSlice(slices);
      const benefits_section = getBenefitsSectionSlice(slices);
      const secondary_hero_section = getSecondaryHeroSectionSlice(slices);
      const onboarding_section = getOnboardingSlice(slices);

      const page = {
        hero_section,
        secondary_hero_section,
        benefits_section,
        onboarding_section,
      };
      commit("SAVE_ESCROW_PAGE", page);
    }
    return response;
  },

  async fetchPageLayout({ commit }) {
    window?.NProgress && window?.NProgress.start();
    const response = await app.$prismic.client.getSingle("layout");
    window?.NProgress && window?.NProgress.done();
    if (response?.data) {
      const res = response?.data;
      const slices = res.body;

      const page = {
        banners: getAlertBannerSlices(slices),
      };

      commit("SAVE_PAGE_LAYOUT", page);
    }
    return response;
  },
};
