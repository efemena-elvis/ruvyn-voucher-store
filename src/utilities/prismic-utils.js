import * as prismicH from "@prismicio/helpers";

export const getSlice = (slices, slice_type, slice_label = "") => {
  const slice = slices.find(
    (slice) =>
      slice.slice_type === slice_type &&
      (slice_label ? slice_label === slice.slice_label : true)
  );
  return slice
    ? {
        data: slice.primary,
        items: slice.items,
        type: slice.slice_type,
        label: slice.slice_label,
        id: slice.id,
      }
    : { data: null, items: [], type: null, label: null, id: null };
};

export const getSlices = (slices, slice_type, slice_label = "") => {
  const matched_slices = slices.filter(
    (slice) =>
      slice.slice_type === slice_type &&
      (slice_label ? slice_label === slice.slice_label : true)
  );

  return matched_slices
    ? matched_slices.map((slice) => ({
        data: slice.primary,
        items: slice.items,
        type: slice.slice_type,
        label: slice.slice_label,
        id: slice.id,
      }))
    : [];
};

export const getOnboardingSlice = (slices) => {
  const { data } = getSlice(slices, "onboarding_section");
  return data
    ? {
        onboarding_title: prismicH.asText(data.onboarding_title),
        onboarding_description: prismicH.asText(data.onboarding_description),
        contact_cta_label: prismicH.asText(data.contact_cta_label),
        contact_register_label: prismicH.asText(data.contact_register_label),
      }
    : {
        onboarding_title: "",
        onboarding_description: "",
        contact_cta_label: "",
        contact_register_label: "",
      };
};

export const getHeroSectionSlice = (slices) => {
  const { data, label } = getSlice(slices, "hero_section");
  return data
    ? {
        title: prismicH.asText(data.hero_title),
        subtitle: prismicH.asText(data.hero_subtitle),
        description: prismicH.asText(data.hero_description),
        image: prismicH.asImageSrc(data.hero_image),
        label,
        right_aligned: label === "with_right_aligned_image",
      }
    : {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        label: "",
        right_aligned: false,
      };
};

export const getHeroSectionSliceII = (slices) => {
  const { data, label } = getSlice(
    slices,
    "hero_section",
    "with_left_aligned_image"
  );
  return data
    ? {
        title: prismicH.asText(data.hero_title),
        subtitle: prismicH.asText(data.hero_subtitle),
        description: prismicH.asText(data.hero_description),
        image: prismicH.asImageSrc(data.hero_image),
        label,
        right_aligned: label === "with_right_aligned_image",
      }
    : {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        label: "",
        right_aligned: false,
      };
};

export const getBenefitsSectionSlice = (slices) => {
  const { data, items, label } = getSlice(slices, "benefits_section");
  return data
    ? {
        title: prismicH.asText(data.benefit_title),
        benefits: items?.map((item) => ({
          title: prismicH.asText(item.benefit_title),
          description: prismicH.asText(item.benefit_description),
          icon: prismicH.asImageSrc(item.benefit_icon),
        })),
        label,
        row_type: label === "row_type",
      }
    : {
        title: "",
        benefits: [],
        label: "",
        row_type: false,
      };
};

export const getSecondaryHeroSectionSlice = (slices) => {
  const { data, label } = getSlice(slices, "secondary_hero_section");
  return data
    ? {
        title: prismicH.asText(data.secondary_hero_title),
        description: prismicH.asText(data.secondary_hero_description),
        image: prismicH.asImageSrc(data.secondary_hero_image),
        label,
        right_aligned: label === "with_right_aligned_image",
      }
    : {
        title: "",
        description: "",
        image: "",
        label: "",
        right_aligned: false,
      };
};

export const getSecondaryHeroSectionSliceII = (slices) => {
  const { data, label } = getSlice(
    slices,
    "secondary_hero_section",
    "with_right_aligned_image"
  );
  return data
    ? {
        title: prismicH.asText(data.secondary_hero_title),
        description: prismicH.asText(data.secondary_hero_description),
        image: prismicH.asImageSrc(data.secondary_hero_image),
        label,
        right_aligned: label === "with_right_aligned_image",
      }
    : {
        title: "",
        description: "",
        image: "",
        label: "",
        right_aligned: false,
      };
};

export const getListedBenefitsSectionSlice = (slices) => {
  const { data, items, label } = getSlice(slices, "listed_benefit_section");
  return data
    ? {
        title: prismicH.asText(data.benefit_title),
        description: prismicH.asText(data.benefit_description),
        benefits: items.map((item) => prismicH.asText(item.benefit)),
        label,
      }
    : {
        title: "",
        description: "",
        benefits: [],
        label: "",
      };
};

export const getSecondaryHeroSectionWithBenefitsSlice = (slices) => {
  const { data, items, label } = getSlice(
    slices,
    "secondary_hero_section_with_benefits"
  );
  return data
    ? {
        title: prismicH.asText(data.title),
        description: prismicH.asText(data.description),
        image: prismicH.asImageSrc(data.section_image),
        benefits: items.map((item) => ({
          title: prismicH.asText(item.benefit_title),
          description: prismicH.asText(item.benefit_description),
          icon: prismicH.asImageSrc(item.benefit_icon),
        })),
        label,
        right_aligned: label === "with_right_aligned_image",
      }
    : {
        title: "",
        description: "",
        image: "",
        benefits: [],
        label: "",
        right_aligned: false,
      };
};

export const getAlertBannerSlices = (slices) => {
  return getSlices(slices, "alert_banner")?.map((slice) => ({
    ...slice.data,
    message: prismicH.asHTML(slice.data.message),
  }));
};

export const getBreadcrumbSlice = (slices) => {
  const { items } = getSlice(slices, "breadcrumb");

  return items?.length
    ? items?.map((item) => ({
        name: prismicH.asText(item.name),
        path: item.link,
      }))
    : [];
};

export const pageMeta = (page) => {
  return {
    title: page?.page_title || "",
    description: page?.meta_description || "",
    keywords: page?.meta_keywords || "",
    tags: page?.meta_tags || "",
  };
};
