import OpengraphImage from 'components/opengraph-image';

export default async function Image({
  params
}: {
  params: { collection: string };
}) {
  // const collection = await getCollection(params.collection);
  const title = params.collection; // Replaced with static title

  return await OpengraphImage({ title });
}
