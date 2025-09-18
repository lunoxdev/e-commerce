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
    title: "Camiseta de Círculos",
    description: "Una camiseta elegante con un diseño único de círculos.",
    descriptionHtml:
      "<p>Una camiseta elegante con un diseño único de <strong>círculos</strong>.</p>",
    options: [
      { id: "color", name: "Color", values: ["Negro", "Blanco"] },
      { id: "size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("20.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("20.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "1-black-s",
        title: "Negro / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Negro" },
          { name: "size", value: "S" },
        ],
        price: { amount: String(Number("20.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "1-black-m",
        title: "Negro / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Negro" },
          { name: "size", value: "M" },
        ],
        price: { amount: String(Number("20.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "1-black-l",
        title: "Negro / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Negro" },
          { name: "size", value: "L" },
        ],
        price: { amount: String(Number("20.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "1-black-xl",
        title: "Negro / XL",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Negro" },
          { name: "size", value: "XL" },
        ],
        price: { amount: String(Number("20.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-tshirt/640/480",
      altText: "Imagen de Camiseta de Círculos",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-tshirt-a/640/480",
        altText: "Imagen 1 de Camiseta de Círculos",
      },
      {
        url: "https://picsum.photos/seed/acme-tshirt-b/640/480",
        altText: "Imagen 2 de Camiseta de Círculos",
      },
    ],
    seo: {
      title: "Camiseta de Círculos",
      description: "Descripción SEO para Camiseta de Círculos",
    },
    tags: ["clothing", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    handle: "acme-drawstring-bag",
    availableForSale: true,
    title: "Bolsa con Cordón",
    description: "Una bolsa versátil con cordón para tus necesidades diarias.",
    descriptionHtml:
      "<p>Una bolsa <strong>versátil</strong> con cordón para tus necesidades diarias.</p>",
    options: [{ id: "color", name: "Color", values: ["Negro"] }],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("12.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("12.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "2-black",
        title: "Negro",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Negro" }],
        price: { amount: String(Number("12.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-bag/640/480",
      altText: "Imagen de Bolsa con Cordón",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-bag-a/640/480",
        altText: "Imagen 1 de Bolsa con Cordón",
      },
    ],
    seo: {
      title: "Bolsa con Cordón",
      description: "Descripción SEO para Bolsa con Cordón",
    },
    tags: ["accessories", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    handle: "acme-cup",
    availableForSale: true,
    title: "Taza",
    description: "Una taza elegante para tus bebidas favoritas.",
    descriptionHtml:
      "<p>Una taza <strong>elegante</strong> para tus bebidas favoritas.</p>",
    options: [{ id: "color", name: "Color", values: ["Gris"] }],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("15.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("15.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "3-gray",
        title: "Gris",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Gris" }],
        price: { amount: String(Number("15.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-cup/640/480",
      altText: "Imagen de Taza",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-cup-a/640/480",
        altText: "Imagen 1 de Taza",
      },
    ],
    seo: {
      title: "Taza",
      description: "Descripción SEO para Taza",
    },
    tags: ["homeware", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    handle: "acme-mug",
    availableForSale: true,
    title: "Taza (con asa)",
    description: "Una taza de cerámica clásica para tu café o té.",
    descriptionHtml:
      "<p>Una taza de cerámica <strong>clásica</strong> para tu café o té.</p>",
    options: [{ id: "color", name: "Color", values: ["Negro"] }],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("15.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("15.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "4-black",
        title: "Negro",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Negro" }],
        price: { amount: String(Number("15.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-mug/640/480",
      altText: "Imagen de Taza",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-mug-a/640/480",
        altText: "Imagen 1 de Taza",
      },
    ],
    seo: {
      title: "Taza",
      description: "Descripción SEO para Taza",
    },
    tags: ["homeware", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    handle: "acme-hoodie",
    availableForSale: true,
    title: "Sudadera con Capucha",
    description: "Una sudadera cómoda y elegante con capucha.",
    descriptionHtml:
      "<p>Una sudadera <strong>cómoda</strong> y elegante con capucha.</p>",
    options: [
      { id: "color", name: "Color", values: ["Gris"] },
      { id: "size", name: "Size", values: ["S", "M", "L"] },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("50.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("50.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "5-gray-s",
        title: "Gris / S",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gris" },
          { name: "size", value: "S" },
        ],
        price: { amount: String(Number("50.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "5-gray-m",
        title: "Gris / M",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gris" },
          { name: "size", value: "M" },
        ],
        price: { amount: String(Number("50.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "5-gray-l",
        title: "Gris / L",
        availableForSale: true,
        selectedOptions: [
          { name: "Color", value: "Gris" },
          { name: "size", value: "L" },
        ],
        price: { amount: String(Number("50.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-hoodie/640/480",
      altText: "Imagen de Sudadera con Capucha",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-hoodie-a/640/480",
        altText: "Imagen 1 de Sudadera con Capucha",
      },
    ],
    seo: {
      title: "Sudadera con Capucha Acme",
      description: "Descripción SEO para Sudadera con Capucha",
    },
    tags: ["clothing", "featured"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    handle: "acme-baby-onesie",
    availableForSale: true,
    title: "Pijama de Bebé",
    description: "Un lindo pijama de bebé.",
    descriptionHtml: "<p>Un <strong>lindo</strong> pijama de bebé.</p>",
    options: [{ id: "size", name: "Size", values: ["RN", "3M", "6M"] }],
    priceRange: {
      maxVariantPrice: {
        amount: String(Number("10.00") * 500),
        currencyCode: "CRC",
      },
      minVariantPrice: {
        amount: String(Number("10.00") * 500),
        currencyCode: "CRC",
      },
    },
    variants: [
      {
        id: "6-nb",
        title: "Recién Nacido",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "NB" }],
        price: { amount: String(Number("10.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "6-3m",
        title: "3 Meses",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "3M" }],
        price: { amount: String(Number("10.00") * 500), currencyCode: "CRC" },
      },
      {
        id: "6-6m",
        title: "6 Meses",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "6M" }],
        price: { amount: String(Number("10.00") * 500), currencyCode: "CRC" },
      },
    ],
    featuredImage: {
      url: "https://picsum.photos/seed/acme-baby-onesie/640/480",
      altText: "Imagen de Pijama de Bebé",
    },
    images: [
      {
        url: "https://picsum.photos/seed/acme-baby-onesie-a/640/480",
        altText: "Imagen 1 de Pijama de Bebé",
      },
    ],
    seo: {
      title: "Pijama de Bebé Acme",
      description: "Descripción SEO para Pijama de Bebé",
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
      currencyCode: "CRC",
    },
    totalTaxAmount: {
      amount: "0.00", // Set to 0.00 for an empty cart template
      currencyCode: "CRC",
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
    title: "Todos",
    path: "/search",
    updatedAt: new Date().toISOString(),
  },
];

export const MOCK_PAGES = [
  {
    handle: "about",
    title: "Sobre Nosotros",
    body: "<p>Acerca de nuestra tienda.</p>",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "contact",
    title: "Contáctanos",
    body: "<p>Contáctanos aquí.</p>",
    updatedAt: new Date().toISOString(),
  },
];
