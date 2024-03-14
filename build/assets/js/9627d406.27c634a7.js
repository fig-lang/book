"use strict";(self.webpackChunkfig_doc=self.webpackChunkfig_doc||[]).push([[437],{5454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(4848),a=t(8453);const i={},s=void 0,o={id:"tutorial-basics/Functions",title:"Functions",description:"Functions in Fig are blocks of code that perform a specific task. They are declared using the fn keyword followed by the function name, parameters (if any), and return type (if any). Here's the general syntax for defining a function:",source:"@site/docs/tutorial-basics/Functions.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Functions",permalink:"/docs/tutorial-basics/Functions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Functions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External Statement",permalink:"/docs/tutorial-basics/External Statement"},next:{title:"Import",permalink:"/docs/tutorial-basics/Import"}},c={},l=[{value:"Function Parameters",id:"function-parameters",level:3},{value:"Return Type",id:"return-type",level:3},{value:"Calling Functions",id:"calling-functions",level:3},{value:"Examples",id:"examples",level:3}];function u(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Functions in Fig are blocks of code that perform a specific task. They are declared using the ",(0,r.jsx)(n.code,{children:"fn"})," keyword followed by the function name, parameters (if any), and return type (if any). Here's the general syntax for defining a function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn function_name(parameter1: type1, parameter2: type2, ...): return_type {\n    // Function body\n    // Code to perform the task\n    return result; // (if return_type is specified)\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"function-parameters",children:"Function Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Functions can have zero or more parameters, which are variables used to pass data into the function. Parameters are specified within the parentheses after the function name."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'fn greet(name: char[]) {\n    print_str("Hello, ");\n    print_str(name);\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"return-type",children:"Return Type"}),"\n",(0,r.jsx)(n.p,{children:"Functions can specify a return type to indicate the type of value they return. If a function doesn't return any value, it doesn't specify a return type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn add(x: i32, y: i32): i32 {\n    return x + y;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"calling-functions",children:"Calling Functions"}),"\n",(0,r.jsx)(n.p,{children:"To call a function, you simply write the function name followed by parentheses containing the arguments (if any) passed to the function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let result = add(3, 5);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Here are some more examples of functions in Fig:\nCalculate Factorial"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn factorial(n: i32): i32 {\n    if (n <= 1) {\n        return 1;\n    } else {\n        return n * factorial(n - 1);\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);