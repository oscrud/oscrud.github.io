const path = require("path");
module.exports = {
    title: "Oscrud",
    tagline: "Golang Restful API Wrapper Framework",
    url: "https://oscrud.github.io",
    organizationName: "oscrud",
    projectName: "docs",
    baseUrl: "/",
    favicon: "static/image/favicon.png",
    plugins: [path.resolve(__dirname, "./node_modules/docusaurus-lunr-search/")],
    themeConfig: {
        navbar: {
            logo: {
                alt: "Oscrud",
                src: "static/image/favicon.png",
                href: "/docs/home",
                width: "800px",
            },
            links: [
                {
                    to: "docs/home",
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
                    blogSidebarTitle: { default: 'Recent posts', all: 'All blog posts' },
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/oscrud/docs/edit/master/blog/",
                },
            },
        ],
    ],
};