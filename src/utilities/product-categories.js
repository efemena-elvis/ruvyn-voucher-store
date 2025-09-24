import NG_FLAG from "../../src/modules/landing-v2/assets/flags/nigeria-flag.svg";

export default [
  {
    name: "Arrivals",
    id: "arrivals",
    slug: "arrivals",
    description:
      "Explore the latest fashion arrivals with our handpicked collection.",
    products: [
      {
        name: "Polo",
        id: "polo",
        description: "Here is a nice polo shirt for you",
        price: 50,
        tax: 0.5,
      },
      {
        name: "Zip High Wall Tote",
        id: "zhwt",
        description: "A stylish zip high wall tote for your daily needs",
        price: 150,
        tax: 1.5,
      },
      {
        name: "Halfsize Tote",
        id: "ht",
        description: "A trendy halfsize tote for your essentials",
        price: 200,
        tax: 2,
      },
      {
        name: "Focus",
        id: "focus",
        description: "Stay focused with this high-quality product",
        price: 500,
        tax: 5,
      },
    ],
  },
  {
    name: "Dresses",
    id: "dresses",
    slug: "dresses",
    description:
      "Discover a stunning collection of dresses for every occasion.",
    products: [
      // {
      //   name: "Elegant Evening Gown",
      //   id: "eeg",
      //   description: "Turn heads with this elegant evening gown",
      //   price: 300,
      //   tax: 3,
      // },
      {
        name: "Casual Summer Dress",
        id: "csd",
        description: "Stay cool and stylish with this casual summer dress",
        price: 80,
        tax: 0.8,
      },
      {
        name: "Formal Business Attire",
        id: "fba",
        description: "Impress at work with this formal business attire",
        price: 250,
        tax: 2.5,
      },
      {
        name: "Bohemian Maxi Dress",
        id: "bmd",
        description: "Embrace your free spirit with this bohemian maxi dress",
        price: 120,
        tax: 1.2,
      },
    ],
  },
  {
    name: "Shoes",
    id: "shoes",
    slug: "shoes",
    description: "Step into style with our diverse collection of footwear.",
    products: [
      {
        name: "Running Sneakers",
        id: "rs",
        description: "Hit the ground running with these comfortable sneakers",
        price: 70,
        tax: 0.7,
      },
      {
        name: "Classic Leather Boots",
        id: "clb",
        description: "Step out in style with these classic leather boots",
        price: 180,
        tax: 1.8,
      },
      {
        name: "Canvas Slip-Ons",
        id: "cso",
        description: "Casual and easy-going canvas slip-ons for everyday wear",
        price: 50,
        tax: 0.5,
      },
      {
        name: "High Heel Pumps",
        id: "hhp",
        description: "Elevate your look with these chic high heel pumps",
        price: 120,
        tax: 1.2,
      },
    ],
  },
  {
    name: "Accessories",
    id: "accessories",
    slug: "accessories",
    description: "Complete your look with our stylish range of accessories.",
    products: [
      {
        name: "Leather Briefcase",
        id: "lb",
        description: "A sleek leather briefcase for the modern professional",
        price: 180,
        tax: 1.8,
      },
      {
        name: "Stylish Sunglasses",
        id: "ss",
        description: "Protect your eyes with these stylish sunglasses",
        price: 70,
        tax: 0.7,
      },
      {
        name: "Rose Gold Wristwatch",
        id: "rgw",
        description: "Make a statement with this elegant rose gold wristwatch",
        price: 200,
        tax: 2,
      },
      {
        name: "Classic Fedora Hat",
        id: "cfh",
        description: "Top off your look with this timeless fedora hat",
        price: 40,
        tax: 0.4,
      },
    ],
  },
];

export const CHECKOUT_PLAYGROUND_CART = "CHECKOUT_PLAYGROUND_CART";

export const getPlaygroundCart = () => {
  const cart = localStorage.getItem(CHECKOUT_PLAYGROUND_CART) || "[]";
  return JSON.parse(cart);
};

export const updatePlaygroundCart = (cart) => {
  const save_cart = JSON.stringify(cart);
  localStorage.setItem(CHECKOUT_PLAYGROUND_CART, save_cart);
};

export const CHECKOUT_PLAYGROUND_COUNTRY = "CHECKOUT_PLAYGROUND_COUNTRY";

export const getPlaygroundCountry = () => {
  const ng = {
    name: "Zambia",
    code: "zm",
    currency: "ZMW",
    flag: "https://flagsapi.com/ZM/flat/64.png",
    payment_methods: ["card"],
    sign: "ZMW ",
  };

  const country = localStorage.getItem(CHECKOUT_PLAYGROUND_COUNTRY);
  return country ? JSON.parse(country) : ng;
};

export const updatePlaygroundCountry = (country) => {
  const saved_country = JSON.stringify(country);
  localStorage.setItem(CHECKOUT_PLAYGROUND_COUNTRY, saved_country);
};
