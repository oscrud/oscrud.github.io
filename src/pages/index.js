import React from 'react';
import classnames from 'classnames';

import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import CodeBlock from '@site/src/theme/code_block';
import styles from './index.module.css';

const snippets = [
    {
        label: 'Handler',
        code: `package service

import (
    "context"
    "errors"

    "github.com/oscrud/scaffold/model"
)

// ExampleRequest :
type ExampleRequest struct {
    Name  string \`json: "name"\`
    Error bool   \`json: "error"\`
}

// ExampleResponse :
type ExampleResponse struct {
    Result model.User \`json: "result"\`
}

// Errors :
var (
    ExampleErrorRequest = errors.New("example of error retusrns")
)

// Example :
func (srv ExampleService) Example(ctx context.Context, req *ExampleRequest) (*ExampleResponse, error) {
    if req.Error {
        return nil, ExampleErrorRequest
    }
    response := new(ExampleResponse)
    response.Result = model.User{Name: req.Name}
    return response, nil
}`
    },
];

const features = [
    {
        title: <>Lorem Ipsum</>,
        imageUrl: 'image/favicon.png',
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </>
        )
    },
    {
        title: <>Lorem Ipsum</>,
        imageUrl: 'image/favicon.png',
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </>
        )
    },
    {
        title: <>Lorem Ipsum</>,
        imageUrl: 'image/favicon.png',
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </>
        )
    },
    {
        title: <>Lorem Ipsum</>,
        imageUrl: 'image/favicon.png',
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </>
        )
    }
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={classnames('col col--6', styles.feature)}>
            {imgUrl && (
                <div className='text--center'>
                    <img
                        className={classnames('padding-vert--md', styles.featureImage)}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function IndexPage() {
    const context = useDocusaurusContext()
    const { siteConfig } = context;
    const mainFeatures = [
        <>Communicated via GRPC + JSON.</>,
        <>Auto generated client code.</>,
        <>Built-in <Link to={useBaseUrl("docs/tools/geliver")}>development tools</Link>.</>,
        <>Built-in <Link to={useBaseUrl("docs/tools/command-line")}>command line interface</Link>.</>,
        <>Middleware pre-post request handler.</>,
        <>Standardize handler code.</>,
        <>Write unit test easily with go built-in test</>,
    ];
    return (
        <Layout
            title="Oscrud | Golang GPRC + JSON Framework"
            description="golang grpc + json framework"
            keywords={["oscrud", "golang", "framework"]}
        >
            {/* Headers */}
            <header className={classnames('hero', styles.heroBanner)}>
                <div className='container'>
                    <div className='row'>
                        <div className={classnames('col col--5 col--offset-1')}>
                            <h1 className='hero__title'>{siteConfig.title}</h1>
                            <p className='hero__subtitle'>{siteConfig.tagline}</p>
                            <div className={styles.buttons + ' ' + styles.buttonDiv}>
                                <Link
                                    className={classnames(
                                        'button button--outline button--secondary button--lg',
                                        styles.getStarted
                                    )}
                                    to={useBaseUrl('docs/introduction')}
                                >
                                    Get Started
                                 </Link>
                            </div>
                        </div>
                        <div className={classnames('col col--5')}>
                            <img className={styles.heroImg} src="image/favicon.png" />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className='container'>
                    <div className='row'>
                        {/* Main Features */}
                        <div className={classnames(`${styles.pitch} col col--6`)}>
                            <h2>A grpc + json framework</h2>
                            <p>Main Features:</p>
                            <ul>
                                {mainFeatures.map(feature => <li>{feature}</li>)}
                            </ul>
                        </div>

                        {/*  Code Snippets  */}
                        <div className={classnames('col col--6')}>
                            {snippets && snippets.length && (
                                <section className={styles.configSnippets}>
                                    <Tabs
                                        defaultValue={snippets[0].label}
                                        values={snippets.map((props) => {
                                            return { label: props.label, value: props.label }
                                        })}
                                    >
                                        {snippets.map((props, idx) => (
                                            <TabItem key={idx} value={props.label}>
                                                <CodeBlock snippet={props.code} />
                                            </TabItem>
                                        ))}
                                    </Tabs>
                                </section>
                            )}
                        </div>
                        {/* Features */}
                        {features && features.length && (
                            <section className={styles.features}>
                                <div className='container margin-vert--md'>
                                    <div className='row'>
                                        {features.map((props, idx) => (
                                            <Feature key={idx} {...props} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

        </Layout>
    );
}

export default IndexPage;