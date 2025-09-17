import type { Metadata } from 'next';

import Prose from 'components/prose';
// import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

// Explicitly define the expected props type based on Vercel's error
interface PageProps {
  params: Promise<{ page: string }>;
}

export const metadata: Metadata = {
  title: 'Page',
  description: 'Page description.'
};

interface PageContent {
  title: string;
  body: string;
  updatedAt: string;
}

export default async function Page(props: PageProps) {
  const resolvedParams = await props.params; // Await props.params
  const { page: pageHandle } = resolvedParams; // Destructure page as pageHandle
  const page: PageContent = {
    title: 'Dummy Page',
    body: '<p>This is a dummy page body.</p>',
    updatedAt: new Date().toISOString(),
  };

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
