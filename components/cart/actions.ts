"use server";

import { MOCK_CART, MOCK_PRODUCTS } from "lib/mock-data"; // Import MOCK_CART for initial state
import { cookies } from "next/headers";
import { Cart, CartItem, Product, ProductVariant } from "./cart-context"; // Import types

const CART_COOKIE = "mock-cart";

async function getMockCartFromCookie(): Promise<Cart | undefined> {
  const cartCookie = (await cookies()).get(CART_COOKIE)?.value;
  if (cartCookie) {
    try {
      return JSON.parse(cartCookie);
    } catch (e) {
      console.error("Error parsing cart cookie:", e);
      return undefined;
    }
  }
  return undefined;
}

async function setMockCartInCookie(cart: Cart) {
  (await cookies()).set(CART_COOKIE, JSON.stringify(cart));
}

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartTotals(
  lines: CartItem[]
): Pick<Cart, "totalQuantity" | "cost"> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce(
    (sum, item) => sum + Number(item.cost.totalAmount.amount),
    0
  );
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? "USD";

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: "0", currencyCode },
    },
  };
}

function createOrUpdateCartItem(
  existingItem: CartItem | undefined,
  variant: ProductVariant,
  product: Product
): CartItem {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);

  return {
    id: existingItem?.id || Date.now().toString(), // Generate a unique ID if not existing
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode,
      },
    },
    merchandise: {
      id: variant.id,
      title: variant.title,
      selectedOptions: variant.selectedOptions,
      product: {
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.featuredImage,
      },
    },
  };
}

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  let cart = await getMockCartFromCookie();
  if (!cart) {
    cart = { ...MOCK_CART, lines: [] }; // Start with an empty cart based on MOCK_CART structure
  }

  // Find the product and variant from MOCK_PRODUCTS
  let product: Product | undefined;
  let variant: ProductVariant | undefined;

  for (const mockProduct of MOCK_PRODUCTS) {
    variant = mockProduct.variants.find((v) => v.id === selectedVariantId);
    if (variant) {
      product = mockProduct;
      break;
    }
  }

  if (!product || !variant) {
    console.error(
      "Product or variant not found for selectedVariantId:",
      selectedVariantId
    );
    return "Error: Product or variant not found."; // Return an error message
  }

  // Update the variant with the correct price from the found variant
  const actualVariant: ProductVariant = {
    ...variant,
    price: {
      amount: variant.price.amount,
      currencyCode: variant.price.currencyCode,
    }, // Use actual variant price
  };

  const existingItem = cart.lines.find(
    (item) => item.merchandise.id === actualVariant.id
  );
  const updatedItem = createOrUpdateCartItem(
    existingItem,
    actualVariant,
    product
  );

  const updatedLines = existingItem
    ? cart.lines.map((item) =>
        item.merchandise.id === actualVariant.id ? updatedItem : item
      )
    : [...cart.lines, updatedItem];

  const newCart = {
    ...cart,
    ...updateCartTotals(updatedLines),
    lines: updatedLines,
  };
  await setMockCartInCookie(newCart);

  // Return a simple message string for useActionState's `message` state
  return "Item added to cart successfully!";
}

export async function removeItem(prevState: any, lineId: string) {
  let cart = await getMockCartFromCookie();
  if (!cart) return null; // No cart to remove from

  const updatedLines = cart.lines.filter((item) => item.id !== lineId);
  const newCart = {
    ...cart,
    ...updateCartTotals(updatedLines),
    lines: updatedLines,
  };
  await setMockCartInCookie(newCart);

  return "Item removed successfully!"; // Return a simple message
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string;
    quantity: number;
  }
) {
  let cart = await getMockCartFromCookie();
  if (!cart) return null; // No cart to update

  const updatedLines = cart.lines
    .map((item) =>
      item.id === payload.lineId
        ? {
            ...item,
            quantity: payload.quantity,
            cost: {
              ...item.cost,
              totalAmount: {
                ...item.cost.totalAmount,
                amount: calculateItemCost(
                  payload.quantity,
                  (
                    Number(item.cost.totalAmount.amount) / item.quantity
                  ).toString()
                ),
              },
            },
          }
        : item
    )
    .filter((item) => item.quantity > 0); // Remove if quantity becomes 0

  const newCart = {
    ...cart,
    ...updateCartTotals(updatedLines),
    lines: updatedLines,
  };
  await setMockCartInCookie(newCart);

  return "Item quantity updated successfully!"; // Return a simple message
}

export async function createCartAndSetCookie() {
  const cartId = (await cookies()).get(CART_COOKIE)?.value;
  if (!cartId) {
    const newCart = { ...MOCK_CART, lines: [] }; // Create an empty cart based on MOCK_CART structure
    await setMockCartInCookie(newCart);
  }
}
