"use strict";(self.webpackChunkfig_doc=self.webpackChunkfig_doc||[]).push([[582],{2978:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(4848),n=r(8453);const a={},d=void 0,c={id:"standard-library/Server Library",title:"Server Library",description:"The server.fig standard library provides functions for handling HTTP requests and generating HTTP responses. This document outlines the available functions and their usage.",source:"@site/docs/standard-library/Server Library.md",sourceDirName:"standard-library",slug:"/standard-library/Server Library",permalink:"/book/docs/standard-library/Server Library",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/standard-library/Server Library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Standard Library",permalink:"/book/docs/category/standard-library"},next:{title:"Standard Library",permalink:"/book/docs/standard-library/Standard Library"}},i={},o=[{value:"Functions",id:"functions",level:2},{value:"<code>http_path(request: char[]): char[]</code>",id:"http_pathrequest-char-char",level:3},{value:"<code>new_response(status_code: char[], status_text: char[], headers: char[], body: char[]): char[]</code>",id:"new_responsestatus_code-char-status_text-char-headers-char-body-char-char",level:3},{value:"Constants",id:"constants",level:2},{value:"<code>Success</code>",id:"success",level:3},{value:"Example Usage",id:"example-usage",level:2}];function h(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"server.fig"})," standard library provides functions for handling HTTP requests and generating HTTP responses. This document outlines the available functions and their usage."]}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"http_pathrequest-char-char",children:(0,t.jsx)(s.code,{children:"http_path(request: char[]): char[]"})}),"\n",(0,t.jsx)(s.p,{children:"Extracts the path from an HTTP request. It takes the request string as input and returns the extracted path as a string."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"request"}),": The HTTP request string."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"new_responsestatus_code-char-status_text-char-headers-char-body-char-char",children:(0,t.jsx)(s.code,{children:"new_response(status_code: char[], status_text: char[], headers: char[], body: char[]): char[]"})}),"\n",(0,t.jsx)(s.p,{children:"Creates a new HTTP response string with the specified status code, status text, headers, and body. It returns the formatted HTTP response string."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"status_code"}),": The HTTP status code."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"status_text"}),": The HTTP status text."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"headers"}),": The HTTP headers."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"body"}),": The HTTP response body."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"constants",children:"Constants"}),"\n",(0,t.jsx)(s.h3,{id:"success",children:(0,t.jsx)(s.code,{children:"Success"})}),"\n",(0,t.jsxs)(s.p,{children:["A constant representing a successful HTTP response with the status code ",(0,t.jsx)(s.code,{children:"200 OK"})," and connection closed."]}),"\n",(0,t.jsx)(s.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsxs)(s.p,{children:["To use functions from the ",(0,t.jsx)(s.code,{children:"server.fig"})," standard library, you need to import the module using the ",(0,t.jsx)(s.code,{children:"import"})," statement:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rust",children:'import std;\nimport server;\n\nfn main() {\n    let status_code = "200";\n    let status_text = "OK";\n    let headers = "Content-Type: text/plain";\n    let body = "Hello, World!";\n    let response = server.new_response(status_code, status_text, headers, body);\n    print_str(response);\n}\n'})})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var t=r(6540);const n={},a=t.createContext(n);function d(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);