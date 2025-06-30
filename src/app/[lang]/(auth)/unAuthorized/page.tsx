import React from 'react';
import { getDictionary } from '../../dictionaries';

export default async function unAuthorized({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return <div>{t.unAuthorized.title}</div>;
}
