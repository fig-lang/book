"use strict";(self.webpackChunkfig_doc=self.webpackChunkfig_doc||[]).push([[615],{9721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(4848),a=n(8453);const o={},r=void 0,i={id:"tutorial-basics/External Statement",title:"External Statement",description:"The external statement allows you to import functions from the host language environment, such as JavaScript, which can be executed within the WebAssembly (WASM) environment. This enables Fig to interact with the host environment seamlessly.",source:"@site/docs/tutorial-basics/External Statement.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/External Statement",permalink:"/docs/tutorial-basics/External Statement",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/External Statement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/tutorial-basics/Data Types"},next:{title:"Functions",permalink:"/docs/tutorial-basics/Functions"}},c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The external statement allows you to import functions from the host language environment, such as JavaScript, which can be executed within the WebAssembly (WASM) environment. This enables Fig to interact with the host environment seamlessly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"external io {\n    fn log(message: char[]);\n    fn fetch(url: char[]): char[];\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In this example, the io module is imported from the host environment, providing access to functions like log for logging messages and fetch for making HTTP requests."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(6540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);