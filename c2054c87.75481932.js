(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),i=(r(0),r(194)),a={title:"Timeout Options",sidebar_label:"Timeout Options",keywords:["documentation","oscrud","timeout","options"],description:"timeout options for oscrud server"},c={id:"options/timeout",isDocsHomePage:!1,title:"Timeout Options",description:"timeout options for oscrud server",source:"@site/docs/options/timeout.md",permalink:"/docs/options/timeout",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Timeout Options",sidebar:"defaultSidebar",previous:{title:"Event Options",permalink:"/docs/options/event"},next:{title:"Transport Options",permalink:"/docs/options/transport"}},u=[],p={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Timeout options is apply timeout for endpoint or server. Priority will take endpoint timeout options, if not specified will take server's timeout options. If none of them specified, will have a ",Object(i.b)("em",{parentName:"p"},"default 30 seconds timeout")," for every request."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'timeout := oscrud.TimeoutOptions{\n    Duration: 1 * time.Microsecond,\n    OnTimeout: func(ctx oscrud.Context) oscrud.Context {\n        return ctx.Error(408, errors.New("Another requestimeout")).End()\n    },\n}\n')))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,d=l["".concat(a,".").concat(m)]||l[m]||f[m]||i;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);