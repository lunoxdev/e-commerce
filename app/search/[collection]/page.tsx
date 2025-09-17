import { Metadata } from 'next';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { MOCK_PRODUCTS, Product } from 'lib/mock-data';

// Explicitly define the expected props type based on Vercel's error
interface PageProps {
  params: Promise<{ collection: string }>; // Reverted to Promise<any> for params
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | undefined; // Changed to Promise<any> for searchParams
}

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Collection page description.'
};

export default async function CategoryPage(props: PageProps) {
  const resolvedParams = await props.params; // Await the promise
  const { collection } = resolvedParams; // Destructure collection from resolved params
  const resolvedSearchParams = (await props.searchParams) || {}; // Await and provide a default empty object
  const { sort } = resolvedSearchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let products: Product[] = MOCK_PRODUCTS.filter(product =>
    collection === 'all' ? true : product.tags.includes(collection)
  );

  // Apply sorting (mock implementation - you would replace with actual sorting logic)
  if (sortKey === 'PRICE' && products) {
    products.sort((a, b) => {
      const priceA = Number(a.priceRange.maxVariantPrice.amount);
      const priceB = Number(b.priceRange.maxVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  }

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in ${collection} collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
