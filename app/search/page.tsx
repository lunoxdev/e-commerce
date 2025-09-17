import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { MOCK_PRODUCTS, Product } from 'lib/mock-data';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  let products: Product[] = MOCK_PRODUCTS; // Using mock data

  if (searchValue) {
    products = products.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  // Apply sorting (mock implementation - you would replace with actual sorting logic)
  if (sortKey === 'PRICE' && products) {
    products.sort((a, b) => {
      const priceA = Number(a.priceRange.maxVariantPrice.amount);
      const priceB = Number(b.priceRange.maxVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  }
  // Add other sort keys as needed

  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
