(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(9),a=(t(0),t(194)),o={title:"Specific Binding",sidebar_label:"Specific Binding",keywords:["documentation","oscrud","binder"],description:"oscrud binder bind specific data"},c={id:"binder/specific-binding",isDocsHomePage:!1,title:"Specific Binding",description:"oscrud binder bind specific data",source:"@site/docs/binder/specific-binding.md",permalink:"/docs/binder/specific-binding",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Specific Binding",sidebar:"defaultSidebar",previous:{title:"All Binding",permalink:"/docs/binder/all-binding"},next:{title:"Content Type",permalink:"/docs/reference/content-type"}},l=[],d={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Specific binding will bind value based on specified tag. If you want to bind from all with specified key, you can use all binding instead of specific binding. Binding struct when calling must have addressable, if not will return error ",Object(a.b)("inlineCode",{parentName:"p"},"ErrSourceNotAddressable"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"header")," will target to Header. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"query")," will target to Query. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"body")," will target to Body. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"param")," will target to Param."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"state")," will target to Request Level State")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'var i struct {\n    Token string `header:"token"`\n    IsNew string `query:"isNew"`\n    Username string `body:"username"`\n    Password string `body:"password"`\n    Id string `param:"id"`\n    State string `state:"state"`\n}\n\nctx.Bind(&i)\n')))}p.isMDXComponent=!0},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),p=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,f=s["".concat(o,".").concat(u)]||s[u]||b[u]||a;return t?i.a.createElement(f,c(c({ref:n},d),{},{components:t})):i.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);