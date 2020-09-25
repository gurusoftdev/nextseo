import React, { FC } from 'react';
import Head from 'next/head';

import markup from '../utils/markup';
import minifyJsonLd from '../utils/minifyJsonLd';

export interface LogoJsonLdProps {
  logo: string;
  url: string;
}

const LogoJsonLd: FC<LogoJsonLdProps> = ({ url, logo }) => {
  const jslonld = `{
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "${url}",
    "logo": "${logo}"
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(minifyJsonLd(jslonld))}
        key="jsonld-logo"
      />
    </Head>
  );
};

export default LogoJsonLd;
