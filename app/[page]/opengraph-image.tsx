import OpengraphImage from 'components/opengraph-image';

export default async function Image({ params }: { params: { page: string } }) {
  const title = params.page; // Replaced with static title

  return await OpengraphImage({ title });
}
