(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(194)),c={title:"Websocket",sidebar_label:"Websocket",keywords:["documentation","oscrud","websocket","transport"],description:"readonly websocket transport for oscrud handler"},l={id:"package/transport/websocket/overview",isDocsHomePage:!1,title:"Websocket",description:"readonly websocket transport for oscrud handler",source:"@site/docs/package/transport/websocket/overview.md",permalink:"/docs/package/transport/websocket/overview",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Websocket",sidebar:"defaultSidebar",previous:{title:"GraphQL Handler",permalink:"/docs/package/general/graphql-handler"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]}],i={rightToc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Websocket transport for oscrud and build using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/gorilla/websocket"}),"gorilla_websocket"),"."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Usage"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"New() *Transport"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Default constructor for initialization")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UsePort(port int)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Specify which port to receiving requests")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UseUpgrader(upgrader websocket.Upgrader)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customize websocket upgrader instead using default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UseErrorHandler(handler ErrorHandler)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customize error handler instead using default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UseHandler(handler Handler)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customize message handler and it's required")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UseAuthHandler(handler AuthHandler)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customize auth handler instead using default")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UseCloseHandler(handler CloseHandler)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Customize close handler will run in goroutine")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GetSession(key string)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Get session by id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UpdateSession(key string, session *Session)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Update session by id")))),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ go get github.com/oscrud/websocket\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    ws "github.com/oscrud/websocket"\n    "github.com/gorilla/websocket"\n)\n\nfunc main() {\n    t := ws.New()\n    t.UsePort(3000) // specify port\n    t.UseHandler(\n        func(messageType int, message []byte, session *ws.Session) {\n            bytes := []byte("hello world reply from server")\n            session.SendMessage(bytes)\n        },\n    )\n    t.UseUpgrader(\n        websocket.Upgrader{\n            CheckOrigin: func(request *http.Request) bool {\n                return true\n            },\n        },\n    )\n    t.UseAuthHandler(\n        // mainly to specify which user in the conncetion\n        func(res http.ResponseWriter, req *http.Request) (string, *Session, error) {\n            return uuid.New().String(), nil, nil \n        },\n    )\n}\n\n')))}s.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(O,l(l({ref:t},i),{},{components:n})):a.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);