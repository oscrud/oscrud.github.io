(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(9),a=(r(0),r(161)),c={title:"Configuration",sidebar_label:"Config",keywords:["documentation","oscrud","config","example"],description:"config of oscrud server"},i={id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"config of oscrud server",source:"@site/docs/configuration.md",permalink:"/docs/configuration",lastUpdatedBy:"Oskang09",lastUpdatedAt:1618647156,sidebar_label:"Config"},u=[],l={rightToc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Configuration is using ",Object(a.b)("inlineCode",{parentName:"p"},"json")," formatted file and based on ",Object(a.b)("inlineCode",{parentName:"p"},".oscrud.json")," named file. "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n    "watcher": ".", // Directory for hot reload watch changes\n    "port": "12345", // Port for server \n    "env": { // Environment Variables\n        "SOME_ENV": "SOME_VALUE"\n    },\n    "clients": { // For generate client currently only support "go"\n        "go": {\n            "name": "example",\n            "directory": "client"\n        }\n    }\n}\n')))}p.isMDXComponent=!0},161:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},f=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=t,b=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?o.a.createElement(b,i(i({ref:n},l),{},{components:r})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);