(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(161)),c={title:"Geliver",sidebar_label:"Geliver",keywords:["oscrud","geliver","vscode","web"],description:"geliver in vscode and web"},i={id:"tools/geliver",isDocsHomePage:!1,title:"Geliver",description:"geliver in vscode and web",source:"@site/docs/tools/geliver.md",permalink:"/docs/tools/geliver",lastUpdatedBy:"Oskang09",lastUpdatedAt:1618648798,sidebar_label:"Geliver",sidebar:"defaultSidebar",previous:{title:"Command Line",permalink:"/docs/tools/command-line"}},l=[],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frontend UI Tool for connection oscrud application, and come with some features."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"th"},{href:"https://oscrud.github.io/geliver"}),"Web")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"th"},{href:"https://marketplace.visualstudio.com/items?itemName=Oskang09.geliver"}),"VSCode Extension")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(n.a)({parentName:"td"},{src:"/image/geliver-web.png",alt:"Geliver"}))),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(n.a)({parentName:"td"},{src:"/image/geliver-vscode.png",alt:"Geliver"})))))),Object(o.b)("h1",{id:"typed-endpoints"},"Typed Endpoints"),Object(o.b)("p",null,"All endpoints will automatically imports when selected oscrud server. You can reload to update if u adding new endpoints to the server."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/create-server.png",alt:"create-server"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/typed-endpoint.png",alt:"typed-endpoint"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/generated-request.png",alt:"generated-request"}))),Object(o.b)("h1",{id:"request-and-response-history"},"Request and Response History"),Object(o.b)("p",null,"Every sent request and with response, will be record down at history, when u click it will show the request, response for you."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/example-success.png",alt:"example-success"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/example-error.png",alt:"example-error"}))),Object(o.b)("h1",{id:"collection-and-preset"},"Collection and Preset"),Object(o.b)("p",null,"You can create your own collection and preset, it's just like a folder contains many file. so everytime u need for some shortcut just click and will having the request that u set in preset."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/create-preset.png",alt:"create-preset"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/select-preset.png",alt:"select-preset"}))),Object(o.b)("h1",{id:"theme"},"Theme"),Object(o.b)("p",null,"App and Editor theme is customizable in setting tab, sometimes may not work so suggest to refresh after selected."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/image/setting.png",alt:"setting"}))),Object(o.b)("h1",{id:"geliver-data-export-and-import--only-web-"},"Geliver Data Export and Import ( only Web )"),Object(o.b)("p",null,"History, Collection and Preset is exportable to prevent data loss when changing device or format as backup purpose."))}s.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);