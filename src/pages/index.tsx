import React from 'react';
import Head from 'next/head';

import AdminBar from '../components/AdminBar';

function Index() {
  return (
    <>
      <Head>
        <title>@tager/web-panel</title>
      </Head>
      <AdminBar />
    </>
  );
}

export default Index;
