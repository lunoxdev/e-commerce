import type { Metadata } from 'next';

import Prose from 'components/prose';
// import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Page',
  description: 'Page description.'
};

interface Page {
  title: string;
  body: string;
  updatedAt: string;
}

export default async function Page(props: { params: { page: string } }) {
  const page: Page = {
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
