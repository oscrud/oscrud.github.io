import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import useBaseUrl from '@docusaurus/useBaseUrl';

function IndexPage() {
    return (
        <Layout>
            <Head>
                <title>Oscrud | Golang Restful API Wrapper</title>
                <link rel="canonical" href="https://oscrud.github.io" />
                <meta property="og:description" content="Golang Restful API Wrapper" />
                <meta charSet="utf-8" />
            </Head>
        </Layout>
    );
}

export default IndexPage;