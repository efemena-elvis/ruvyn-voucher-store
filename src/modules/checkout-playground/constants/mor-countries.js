const countries = [
  // {
  //   name: "Egypt",
  //   country: "Egypt",
  //   dialing_code: "20",
  //   code: "EG",
  //   flag: "https://flagsapi.com/EG/flat/64.png",
  //   currency: {
  //     sign: "£",
  //     short: "EGP",
  //     long: "Pound",
  //     description: "Egyptian Pound",
  //   },
  // },
  {
    name: "Ghana",
    country: "Ghana",
    dialing_code: "233",
    code: "GH",
    flag: "https://flagsapi.com/GH/flat/64.png",
    currency: {
      sign: "GH₵",
      short: "GHS",
      long: "Cedi",
      description: "Ghanaian Cedi",
    },
  },
  // {
  //   name: "Kenya",
  //   country: "Kenya",
  //   dialing_code: "254",
  //   code: "KE",
  //   flag: "https://flagsapi.com/KE/flat/64.png",
  //   currency: {
  //     sign: "KSh",
  //     short: "KES",
  //     long: "Shilling",
  //     description: "Kenyan Shilling",
  //   },
  // },
  {
    name: "Nigeria",
    country: "Nigeria",
    dialing_code: "234",
    code: "NG",
    flag: "https://flagsapi.com/NG/flat/64.png",
    currency: {
      sign: "₦",
      short: "NGN",
      long: "Naira",
      description: "Nigerian Naira",
    },
  },
  {
    name: "Rwanda",
    country: "Rwanda",
    dialing_code: "250",
    code: "RW",
    flag: "https://flagsapi.com/RW/flat/64.png",
    currency: {
      sign: "RWF",
      short: "RWF",
      long: "franc",
      description: "Rwandan franc",
    },
  },
  // {
  //   name: "South Africa",
  //   country: "South Africa",
  //   dialing_code: "27",
  //   code: "ZA",
  //   flag: "https://flagsapi.com/ZA/flat/64.png",
  //   currency: {
  //     sign: "R",
  //     short: "ZAR",
  //     long: "Rand",
  //     description: "South African rand",
  //   },
  // },
  // {
  //   name: "United Kingdom",
  //   country: "United Kingdom",
  //   dialing_code: "44",
  //   code: "GB",
  //   flag: "https://flagsapi.com/GB/flat/64.png",
  //   currency: {
  //     sign: "£",
  //     short: "GBP",
  //     long: "Pound Sterling",
  //     description: "British Pound Sterling",
  //   },
  // },
  // {
  //   name: "United States of America",
  //   country: "United States of America",
  //   dialing_code: "1",
  //   code: "US",
  //   flag: "https://flagsapi.com/US/flat/64.png",
  //   currency: {
  //     sign: "$",
  //     short: "USD",
  //     long: "Dollar",
  //     description: "United States Dollar",
  //   },
  // },
  {
    name: "Zambia",
    country: "Zambia",
    dialing_code: "260",
    code: "ZM",
    flag: "https://flagsapi.com/ZM/flat/64.png",
    currency: {
      sign: "ZK",
      short: "ZMW",
      long: "Kwacha",
      description: "Zambian Kwacha",
    },
  },

  {
    name: "Uganda",
    country: "Uganda",
    dialing_code: "256",
    code: "UG",
    flag: "https://flagsapi.com/UG/flat/64.png",
    currency: {
      sign: "UGS",
      short: "UGX",
      long: "Shilling",
      description: "Uganda Shilling",
    },
  },
];

export default countries;

export const CHECKOUT_DEFAULT_SETTINGS = (currency_code) => {
  return {
    logo: "",
    background: "#818988",
    button: "#2c9a4b",
    payment_options: ["card"],
    shipping_methods: [
      {
        name: "Office Pickup",
        time: "1 day",
        amount: 0,
        currency_code,
      },
    ],
  };
};

export const CHECKOUT_SETTINGS_KEY = "CHECKOUT_SETTINGS_KEY";

export const updateCheckoutSettings = (settings) => {
  const save_setting = JSON.stringify(settings);
  localStorage.setItem(CHECKOUT_SETTINGS_KEY, save_setting);
};

export const getCheckoutSettings = () => {
  const settings = localStorage.getItem(CHECKOUT_SETTINGS_KEY);

  return settings
    ? JSON.parse(settings)
    : [...countries].reduce((settings, item) => {
        settings[item.code] = CHECKOUT_DEFAULT_SETTINGS(item.currency.short);
        return settings;
      }, {});
};

export const CHECKOUT_SUBSCRIPTIONS_KEY = "CHECKOUT_SUBSCRIPTIONS_KEY";

export const default_subscriptions = [
  {
    name: "Starter",
    price: "20",
    link: "",
    features: [
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
    ],
  },
  {
    name: "Medium",
    price: "50",
    link: "",
    features: [
      "Everything in starter plan",
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
    ],
  },
  {
    name: "Premium",
    price: "90",
    link: "",
    features: [
      "Everything in medium plan",
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
      "Global payments and billing seamlessly unified in one platform.",
    ],
  },
];

export const getSubscriptions = () => {
  const subs = localStorage.getItem(CHECKOUT_SUBSCRIPTIONS_KEY);

  return subs ? JSON.parse(subs) : [...default_subscriptions];
};

export const updateSubscriptionLinkSettings = (subs, { name, link }) => {
  const updated_subs = subs.map((sub) => {
    if (sub.name === name) sub.link = link;
    return sub;
  });
  const save_subs = JSON.stringify(updated_subs);
  localStorage.setItem(CHECKOUT_SUBSCRIPTIONS_KEY, save_subs);
};
