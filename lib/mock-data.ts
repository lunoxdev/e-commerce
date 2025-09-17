import { cookies } from "next/headers";

export interface Product {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: { id: string; name: string; values: string[] }[];
  priceRange: {
    maxVariantPrice: { amount: string; currencyCode: string };
    minVariantPrice: { amount: string; currencyCode: string };
  };
  variants: {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: { name: string; value: string }[];
    price: { amount: string; currencyCode: string }; // Added price property
  }[];
  featuredImage: { url: string; altText: string };
  images: { url: string; altText: string }[];
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    handle: "acme-circles-t-shirt",
    availableForSale: true,
    title: "Acme Circles T-Shirt",
    description: "A stylish t-shirt with a unique circles design.",
    descriptionHtml:
      "<p>A stylish t-shirt with a unique <strong>circles</strong> design.</p>",
    options: [
      { id: "color", name: "Color", values: ["Black", "White"] },
      { id: "size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "20.00", currencyCode: "USD" },
      minVariantPrice: { amount: "20.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "1-black-s",
        title: "Black / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "20.00", currencyCode: "USD" },
      },
      {
        id: "1-black-m",
        title: "Black / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "20.00", currencyCode: "USD" },
      },
      {
        id: "1-black-l",
        title: "Black / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "20.00", currencyCode: "USD" },
      },
      {
        id: "1-black-xl",
        title: "Black / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Black" },
          { name: "Size", value: "XL" },
        ],
        price: { amount: "20.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-tshirt/640/480",
      altText: "Acme Circles T-Shirt Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-tshirt-a/640/480",
        altText: "Acme Circles T-Shirt Image 1",
      },
      {
        url: "https://picsum.photos/seed/acme-tshirt-b/640/480",
        altText: "Acme Circles T-Shirt Image 2",
      },
    ],
    seo: {
      title: "Acme Circles T-Shirt",
      description: "SEO description for Acme Circles T-Shirt",
    },
    tags: ["clothing", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    handle: "acme-drawstring-bag",
    availableForSale: true,
    title: "Acme Drawstring Bag",
    description: "A versatile drawstring bag for your everyday needs.",
    descriptionHtml:
      "<p>A <strong>versatile</strong> drawstring bag for your everyday needs.</p>",
    options: [{ id: "color", name: "Color", values: ["Black"] }],
    priceRange: {
      maxVariantPrice: { amount: "12.00", currencyCode: "USD" },
      minVariantPrice: { amount: "12.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "2-black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "12.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-bag/640/480",
      altText: "Acme Drawstring Bag Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-bag-a/640/480",
        altText: "Acme Drawstring Bag Image 1",
      },
    ],
    seo: {
      title: "Acme Drawstring Bag",
      description: "SEO description for Acme Drawstring Bag",
    },
    tags: ["accessories", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    handle: "acme-cup",
    availableForSale: true,
    title: "Acme Cup",
    description: "A stylish cup for your favorite beverages.",
    descriptionHtml:
      "<p>A <strong>stylish</strong> cup for your favorite beverages.</p>",
    options: [{ id: "color", name: "Color", values: ["Gray"] }],
    priceRange: {
      maxVariantPrice: { amount: "15.00", currencyCode: "USD" },
      minVariantPrice: { amount: "15.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "3-gray",
        title: "Gray",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gray" }],
        price: { amount: "15.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-cup/640/480",
      altText: "Acme Cup Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-cup-a/640/480",
        altText: "Acme Cup Image 1",
      },
    ],
    seo: {
      title: "Acme Cup",
      description: "SEO description for Acme Cup",
    },
    tags: ["homeware", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    handle: "acme-mug",
    availableForSale: true,
    title: "Acme Mug",
    description: "A classic ceramic mug for your coffee or tea.",
    descriptionHtml:
      "<p>A <strong>classic</strong> ceramic mug for your coffee or tea.</p>",
    options: [{ id: "color", name: "Color", values: ["Black"] }],
    priceRange: {
      maxVariantPrice: { amount: "15.00", currencyCode: "USD" },
      minVariantPrice: { amount: "15.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "4-black",
        title: "Black",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "15.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-mug/640/480",
      altText: "Acme Mug Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-mug-a/640/480",
        altText: "Acme Mug Image 1",
      },
    ],
    seo: {
      title: "Acme Mug",
      description: "SEO description for Acme Mug",
    },
    tags: ["homeware", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    handle: "acme-hoodie",
    availableForSale: true,
    title: "Acme Hoodie",
    description: "A comfortable and stylish hoodie.",
    descriptionHtml:
      "<p>A <strong>comfortable</strong> and stylish hoodie.</p>",
    options: [
      { id: "color", name: "Color", values: ["Gray"] },
      { id: "size", name: "Size", values: ["S", "M", "L"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "50.00", currencyCode: "USD" },
      minVariantPrice: { amount: "50.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "5-gray-s",
        title: "Gray / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "S" },
        ],
        price: { amount: "50.00", currencyCode: "USD" },
      },
      {
        id: "5-gray-m",
        title: "Gray / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "M" },
        ],
        price: { amount: "50.00", currencyCode: "USD" },
      },
      {
        id: "5-gray-l",
        title: "Gray / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gray" },
          { name: "Size", value: "L" },
        ],
        price: { amount: "50.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-hoodie/640/480",
      altText: "Acme Hoodie Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-hoodie-a/640/480",
        altText: "Acme Hoodie Image 1",
      },
    ],
    seo: {
      title: "Acme Hoodie",
      description: "SEO description for Acme Hoodie",
    },
    tags: ["clothing", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    handle: "acme-baby-onesie",
    availableForSale: true,
    title: "Acme Baby Onesie",
    description: "A cute baby onesie.",
    descriptionHtml: "<p>A <strong>cute</strong> baby onesie.</p>",
    options: [{ id: "size", name: "Size", values: ["NB", "3M", "6M"] }],
    priceRange: {
      maxVariantPrice: { amount: "10.00", currencyCode: "USD" },
      minVariantPrice: { amount: "10.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "6-nb",
        title: "Newborn",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "NB" }],
        price: { amount: "10.00", currencyCode: "USD" },
      },
      {
        id: "6-3m",
        title: "3 Months",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "3M" }],
        price: { amount: "10.00", currencyCode: "USD" },
      },
      {
        id: "6-6m",
        title: "6 Months",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "6M" }],
        price: { amount: "10.00", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-baby-onesie/640/480",
      altText: "Acme Baby Onesie Image",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-baby-onesie-a/640/480",
        altText: "Acme Baby Onesie Image 1",
      },
    ],
    seo: {
      title: "Acme Baby Onesie",
      description: "SEO description for Acme Baby Onesie",
    },
    tags: ["baby", "featured"],
    updatedAt: new Date().toISOString(),
  },
];

export const MOCK_CART = {
  id: "mock-cart-id",
  totalQuantity: 0, // Set to 0 for an empty cart template
  checkoutUrl: "/checkout", // Added checkoutUrl
  cost: {
    totalAmount: {
      amount: "0.00", // Set to 0.00 for an empty cart template
      currencyCode: "USD",
    },
    totalTaxAmount: {
      amount: "0.00", // Set to 0.00 for an empty cart template
      currencyCode: "USD",
    },
  },
  lines: [], // Empty lines array for an empty cart template
};

export const getMockCart = async () => {
  const cartCookie = (await cookies()).get("mock-cart")?.value;
  if (cartCookie) {
    try {
      return JSON.parse(cartCookie);
    } catch (e) {
      console.error("Error parsing cart cookie in getMockCart:", e);
      return { ...MOCK_CART }; // Return an empty mock cart on error
    }
  }
  return { ...MOCK_CART }; // Return an empty mock cart if no cookie found
};

export const MOCK_COLLECTIONS = [
  {
    handle: "all",
    title: "All",
    path: "/search",
    updatedAt: new Date().toISOString(),
  },
];

export const MOCK_PAGES = [
  {
    handle: "about",
    title: "About Us",
    body: "<p>About our store.</p>",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "contact",
    title: "Contact Us",
    body: "<p>Contact us here.</p>",
    updatedAt: new Date().toISOString(),
  },
];
