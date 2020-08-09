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
        code: `package main

import (
    "github.com/oscrud/oscrud"
)

func Example(ctx oscrud.Context) oscrud.Context {
    return ctx.String(200, "Example Handler")
}

func main() {
    server := oscrud.NewOscrud()
    server.RegisterEndpoint("GET", "/example", Example)
    
    group := server.Group("/v1")
    group.RegisterEndpoint("GET", "/example", Example) // registered at /v1/example
    server.Start()
}`
    },
    {
        label: 'Data Binding',
        code: `package main

import (
    "github.com/oscrud/oscrud"
)

func Example(ctx oscrud.Context) oscrud.Context {
    var i struct {
        Data string \`json:"data"\`
        Data2 string \`oscrud:"data2"\`
    }

    if err := ctx.BindAll(&i); err != nil {
        return ctx.Error(400, err)
    }
    return ctx.String(200, "Example Handler")
}

func main() {
    server := oscrud.NewOscrud()
    server.RegisterEndpoint("GET", "/example", Example)
    server.Start()
}`
    },
    {
        label: 'Custom Binder',
        code: `package main

import (
    "github.com/oscrud/oscrud"
)

func main() {
    server := oscrud.NewOscrud()
    server.RegisterBinder(
        string(""),
        time.Time{},
        func(raw interface{}) (interface{}, error) {
            text := raw.(string)
            return time.Parse("2006-01-02", text)
        },
    )
}`,
    },
    {
        label: 'Service Model',
        code: `// User :
type User struct {
    ID   int    \`json:"id" oscrud:"id"\`
    Name string \`json:"name"\`
}

// ToCreate :
func (user *User) ToCreate() error {
    if len(user.Name) > 20 {
        return errors.New("username have a maximum length 20")
    }
    return nil
}

// ToResult :
func (user *User) ToResult(action oscrud.ServiceAction) (interface{}, error) {
    return user, nil
}

// ToQuery :
func (user *User) ToQuery(action oscrud.ServiceAction) (interface{}, error) {
    return user, nil
}

// ToPatch :
func (user *User) ToPatch(incoming oscrud.ServiceModel) error {
    incomingUser := incoming.(*User)
    user.Name = incomingUser.Name
    return nil
}

// ToUpdate :
func (user *User) ToUpdate(incoming oscrud.ServiceModel) error {
    incomingUser := incoming.(*User)
    user.Name = incomingUser.Name
    return nil
}

// ToDelete :
func (user *User) ToDelete() error {
    return nil
}`
    }
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
        <>Centralized core and shared across components.</>,
        <>Easy binding incoming data with single tag.</>,
        <>Custom type binding <Link to={useBaseUrl("docs/binder/overview")}>Binder</Link> and able to use independently.</>,
        <>Multiple <Link to={useBaseUrl("docs/transport/overview")}>Transport</Link> in single oscrud.</>,
        <>Register multiple endpoint at once in <Link to={useBaseUrl("docs/service/overview")}>Service</Link>.</>,
        <>Easy extensible Transport, Handler, Options and Service.</>,
        <>Easy logging in everywhere with core.</>,
        <>Lots of third party library supported.</>,
    ];
    return (
        <Layout
            title="Oscrud | Golang Restful API Wrappper"
            description="golang resftul api wrapper framework"
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
                            <h2>
                                A wrapper framework, plug and play, more customization
                            </h2>
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