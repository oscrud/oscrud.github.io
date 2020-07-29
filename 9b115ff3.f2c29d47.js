(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{170:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(9),i=(r(0),r(196)),a={title:"Using Options",sidebar_label:"Using Options",keywords:["documentation","oscrud","options","middleware"],description:"register options to oscrud server"},c={id:"server/use-options",isDocsHomePage:!1,title:"Using Options",description:"register options to oscrud server",source:"@site/docs/server/use-options.md",permalink:"/docs/server/use-options",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Using Options",sidebar:"defaultSidebar",previous:{title:"Constructing Request",permalink:"/docs/server/new-request"},next:{title:"Register Binder",permalink:"/docs/server/register-binder"}},s=[],u={rightToc:s};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For apply server-level options ( mean apply to all endpoints )."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    middleware := oscrud.MiddlewareOptions{\n        Before: []oscrud.Handler{\n            func(ctx oscrud.Context) oscrud.Context {\n                log.Println("I\'m Before Middleware")\n                return ctx\n            }\n        },\n    }\n    event := oscrud.EventOptions{\n        OnComplete: func(ctx oscrud.Context) {\n            log.Println("This running from go-routine as event-drive OnComplete().")\n        },\n    }\n    // You can just apply all in one line.\n    server.UseOptions(middleware, event)\n}\n')))}p.isMDXComponent=!0},196:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=t,m=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return r?o.a.createElement(m,c(c({ref:n},u),{},{components:r})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);