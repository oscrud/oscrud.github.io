(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{160:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),l=t.n(r),i=t(182),o=t.n(i),m=t(177),c=t(245),s=t(246),u=t(166),d=t(168),p=t(162),E=t(500),g=t(498);var v=function(e){var a=e.snippet;return l.a.createElement(E.a,{language:"go",style:g.a,showLineNumbers:!0},a)},f=t(157),b=t.n(f),x=[{label:"Handler",code:'package service\n\nimport (\n    "context"\n    "errors"\n\n    "github.com/oscrud/scaffold/model"\n)\n\n// ExampleRequest :\ntype ExampleRequest struct {\n    Name  string `json: "name"`\n    Error bool   `json: "error"`\n}\n\n// ExampleResponse :\ntype ExampleResponse struct {\n    Result model.User `json: "result"`\n}\n\n// Errors :\nvar (\n    ExampleErrorRequest = errors.New("example of error retusrns")\n)\n\n// Example :\nfunc (srv ExampleService) Example(ctx context.Context, req *ExampleRequest) (*ExampleResponse, error) {\n    if req.Error {\n        return nil, ExampleErrorRequest\n    }\n    response := new(ExampleResponse)\n    response.Result = model.User{Name: req.Name}\n    return response, nil\n}'}],q=[{title:l.a.createElement(l.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:l.a.createElement(l.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:l.a.createElement(l.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:l.a.createElement(l.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:l.a.createElement(l.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:l.a.createElement(l.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:l.a.createElement(l.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:l.a.createElement(l.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}];function N(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(d.a)(a);return l.a.createElement("div",{className:o()("col col--6",b.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:o()("padding-vert--md",b.a.featureImage),src:r,alt:t})),l.a.createElement("h3",null,t),l.a.createElement("p",null,n))}a.default=function(){var e=Object(p.a)().siteConfig,a=[l.a.createElement(l.a.Fragment,null,"Communicated via GRPC + JSON."),l.a.createElement(l.a.Fragment,null,"Auto generated client code."),l.a.createElement(l.a.Fragment,null,"Built-in ",l.a.createElement(u.a,{to:Object(d.a)("docs/tools/geliver")},"development tools"),"."),l.a.createElement(l.a.Fragment,null,"Built-in ",l.a.createElement(u.a,{to:Object(d.a)("docs/tools/command-line")},"command line interface"),"."),l.a.createElement(l.a.Fragment,null,"Middleware pre-post request handler."),l.a.createElement(l.a.Fragment,null,"Standardize handler code."),l.a.createElement(l.a.Fragment,null,"Write unit test easily with go built-in test")];return l.a.createElement(m.a,{title:"Oscrud | Golang GPRC + JSON Framework",description:"golang grpc + json framework",keywords:["oscrud","golang","framework"]},l.a.createElement("header",{className:o()("hero",b.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:o()("col col--5 col--offset-1")},l.a.createElement("h1",{className:"hero__title"},e.title),l.a.createElement("p",{className:"hero__subtitle"},e.tagline),l.a.createElement("div",{className:b.a.buttons+" "+b.a.buttonDiv},l.a.createElement(u.a,{className:o()("button button--outline button--secondary button--lg",b.a.getStarted),to:Object(d.a)("docs/introduction")},"Get Started"))),l.a.createElement("div",{className:o()("col col--5")},l.a.createElement("img",{className:b.a.heroImg,src:"image/favicon.png"}))))),l.a.createElement("main",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:o()(b.a.pitch+" col col--6")},l.a.createElement("h2",null,"A grpc + json framework"),l.a.createElement("p",null,"Main Features:"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",null,e)})))),l.a.createElement("div",{className:o()("col col--6")},x&&x.length&&l.a.createElement("section",{className:b.a.configSnippets},l.a.createElement(c.a,{defaultValue:x[0].label,values:x.map((function(e){return{label:e.label,value:e.label}}))},x.map((function(e,a){return l.a.createElement(s.a,{key:a,value:e.label},l.a.createElement(v,{snippet:e.code}))}))))),q&&q.length&&l.a.createElement("section",{className:b.a.features},l.a.createElement("div",{className:"container margin-vert--md"},l.a.createElement("div",{className:"row"},q.map((function(e,a){return l.a.createElement(N,Object(n.a)({key:a},e))})))))))))}}}]);