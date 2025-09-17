import { Metadata } from 'next';

import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { MOCK_PRODUCTS, Product } from 'lib/mock-data';

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Collection page description.'
};

export default async function CategoryPage(props: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchParams = props.searchParams;
  const params = props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let products: Product[] = MOCK_PRODUCTS.filter(product =>
    params.collection === 'all' ? true : product.tags.includes(params.collection)
  );

  // Apply sorting (mock implementation - you would replace with actual sorting logic)
  if (sortKey === 'price' && products) {
    products.sort((a, b) => {
      const priceA = Number(a.priceRange.maxVariantPrice.amount);
      const priceB = Number(b.priceRange.maxVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  }

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in ${params.collection} collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
