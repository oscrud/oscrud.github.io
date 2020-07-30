(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(9),a=(t(0),t(200)),i={title:"Pagination Setting",sidebar_label:"Pagination Setting",keywords:["documentation","oscrud","service","postgres","pagination"],description:"oscrud go-pg service pagination setting"},c={id:"package/service/postgres/pagination",isDocsHomePage:!1,title:"Pagination Setting",description:"oscrud go-pg service pagination setting",source:"@site/docs/package/service/postgres/pagination.md",permalink:"/docs/package/service/postgres/pagination",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596090745,sidebar_label:"Pagination Setting",sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/package/service/postgres/overview"},next:{title:"Customize Response",permalink:"/docs/package/service/postgres/custom-response"}},p=[{value:"Example",id:"example",children:[]}],s={rightToc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"there's two type of pagination, ",Object(a.b)("inlineCode",{parentName:"p"},"cursor")," and ",Object(a.b)("inlineCode",{parentName:"p"},"offset"),". by default will use ",Object(a.b)("inlineCode",{parentName:"p"},"offset")," as well. If you want ot use ",Object(a.b)("inlineCode",{parentName:"p"},"cursor")," and doesn't want ",Object(a.b)("inlineCode",{parentName:"p"},"cursor")," to display truth value, you can chooose encoding type ",Object(a.b)("inlineCode",{parentName:"p"},"hex")," or ",Object(a.b)("inlineCode",{parentName:"p"},"base64"),". And when passing ",Object(a.b)("inlineCode",{parentName:"p"},"UsePagination")," second value is to determine is it wan't to return next page url."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/go-pg/pg"\n    "github.com/go-pg/pg/orm"\n    "github.com/oscrud/oscrud"\n    "github.com/oscrud/postgres"\n)\n\nfunc main() {\n    db := // go-pg database client\n    model := // oscrud service model\n    server := oscrud.NewOscrud()\n    \n    pg := postgres.New()\n    pg.UsePagination(postgres.PaginationTypeCursor, true)\n    pg.UseEncode(postgres.EncodeTypeHex)\n\n    // Service Definition\n    server.RegisterService("/user", pg.ToService(db, model), new(oscrud.ServiceOptions))\n\n    // Everything done? Start the server.\n    server.Start()\n}\n')))}u.isMDXComponent=!0},200:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),d=r,b=l["".concat(i,".").concat(d)]||l[d]||g[d]||a;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);