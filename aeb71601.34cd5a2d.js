(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{178:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(2),i=n(9),o=(n(0),n(200)),a={title:"Register Binder",sidebar_label:"Register Binder",keywords:["documentation","oscrud","binder"],description:"register new binder to oscrud binder"},c={id:"binder/register-new-binder",isDocsHomePage:!1,title:"Register Binder",description:"register new binder to oscrud binder",source:"@site/docs/binder/register-new-binder.md",permalink:"/docs/binder/register-new-binder",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596279836,sidebar_label:"Register Binder",sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/binder/overview"},next:{title:"All Binding",permalink:"/docs/binder/all-binding"}},s=[],l={rightToc:s};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Registering new binder for sepcific type ( struct, array or slice ), primitive not supported yet. "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "log"\n    "fmt"\n    "github.com/oscrud/oscrud-binder"\n)\n\ntype AnyStruct struct {\n    Data string\n}\n\nfunc main() {\n    binder := binder.NewBinder()\n    binder.Register(string(""), AnyStruct{}, func(raw interface{}) (interface{}, error) {\n        return AnyStruct{fmt.Sprintf(raw)}\n    })\n\n    binder.Register(AnyStruct{}, string(""), func(raw interface{}) (interface{}, error) {\n        strct := raw.(AnyStruct)\n        return strct.Data\n    })\n\n    strct := new(AnyStruct)\n    if err := binder.Bind(&strct, "will set to data"); err != nil {\n        log.Println(err)\n    }\n    log.Println(strct.Data) // will set to data\n\n    var str string\n    if err := binder.Bind(&str, strct); err != nil {\n        log.Println(err)\n    }\n    log.Println(str) // will set to data\n\n    if err := binder.Bind(&strct, 10); err != nil {\n        log.Println(err) // Trying to convert 10 to struct AnyStruct\n    }\n}\n')))}u.isMDXComponent=!0},200:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(f,c(c({ref:r},l),{},{components:n})):i.a.createElement(f,c({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);