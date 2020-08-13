const path = require("path");
module.exports = {
    title: "Oscrud",
    tagline: "Golang Restful API Wrapper Framework",
    url: "https://oscrud.github.io",
    organizationName: "oscrud",
    projectName: "oscrud.github.io",
    baseUrl: "/",
    favicon: "image/favicon.png",
    plugins: [path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/")],
    themeConfig: {
        navbar: {
            logo: {
                alt: "Oscrud",
                src: "image/favicon.png",
                href: "/",
                width: "800px",
            },
            links: [
                {
                    to: "docs/introduction",
                    label: "Docs",
                    position: "right",
                },
                {
                    to: "blog",
                    label: "Blog",
                    position: "right"
                },
                {
                    to: "https://github.com/oscrud",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Get Started',
                            to: 'docs/getting-start'
                        },
                        {
                            label: 'Introduction',
                            to: 'docs/introduction'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Gitter',
                            href: 'https://gitter.im/oscrud/community',
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/oscrud/oscud'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Oscrud developers. Built with Docusaurus. Theme inspired by <a href="https://www.benthos.dev">benthos.dev</a>`
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    showReadingTime: true,
                },
            },
        ],
    ],
};