import OpengraphImage from 'components/opengraph-image';
// import { getPage } from 'lib/shopify';

export default async function Image({ params }: { params: { page: string } }) {
  // const page = await getPage(params.page);
  const title = params.page; // Replaced with static title

  return await OpengraphImage({ title });
}
