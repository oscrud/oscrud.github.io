(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{184:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(9),i=(t(0),t(194)),a={title:"Overview",sidebar_label:"Overview",keywords:["documentation","oscrud","binder"],description:"overview oscrud binder"},c={id:"binder/overview",isDocsHomePage:!1,title:"Overview",description:"overview oscrud binder",source:"@site/docs/binder/overview.md",permalink:"/docs/binder/overview",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Overview",sidebar:"defaultSidebar",previous:{title:"Creating Own Oscrud Transport",permalink:"/docs/transport/create-own-transport"},next:{title:"Register Binder",permalink:"/docs/binder/register-new-binder"}},p=[],u={rightToc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Binder")," is for data binding when transform incoming requests data to a specified struct / type / array or slice. Currently customization only supported on ",Object(i.b)("inlineCode",{parentName:"p"},"struct"),", ",Object(i.b)("inlineCode",{parentName:"p"},"slice")," and ",Object(i.b)("inlineCode",{parentName:"p"},"array"),", primitive type will set by ",Object(i.b)("inlineCode",{parentName:"p"},"reflect.Set()"),"."))}l.isMDXComponent=!0},194:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return t?o.a.createElement(f,c(c({ref:r},u),{},{components:t})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);