(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{188:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(9),c=(t(0),t(194)),l={title:"GraphQL Handler",sidebar_label:"GraphQL Handler",keywords:["documentation","oscrud","graphql","handler","third party"],description:"graphql handler for oscrud handler"},o={id:"package/general/graphql-handler",isDocsHomePage:!1,title:"GraphQL Handler",description:"graphql handler for oscrud handler",source:"@site/docs/package/general/graphql-handler.md",permalink:"/docs/package/general/graphql-handler",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"GraphQL Handler",sidebar:"defaultSidebar",previous:{title:"Request Lifecycle",permalink:"/docs/reference/request-lifecycle"},next:{title:"Websocket",permalink:"/docs/package/transport/websocket/overview"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:i};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"graphQL handler for oscrud and build using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphql-go/graphql"}),"graphql-go"),"."),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Handler(schema, options...) *Handler"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default constructor for initialization")))),Object(c.b)("h3",{id:"installation"},"Installation"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ go get github.com/oscrud/graphql-handler\n")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    graphql "github.com/graphql-go/graphql"\n    gh "github.com/oscrud/graphql-handler"\n)\n\nfunc main() {\n    schema := // graphql schema\n\n    server := oscrud.NewServer()\n    server.RegisterEndpoint("GET", "/graphql", gh.Handler(schema))\n\n    server.Start()\n}\n\n')))}u.isMDXComponent=!0},194:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,g=b["".concat(l,".").concat(s)]||b[s]||d[s]||c;return t?a.a.createElement(g,o(o({ref:r},p),{},{components:t})):a.a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=s;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<c;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);