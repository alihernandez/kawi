import React from 'react';
import Head from 'next/head';

const GooglePublisherTag = () => (
  <Head>
    {/* Google tag (gtag.js) */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16519254637"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16519254637');
        `,
      }}
    />
  </Head>
);

export default GooglePublisherTag;