"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[3443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},a="Discussion 2: Types and HOFs",o={unversionedId:"discussions/Week 2 - Types and HOF",id:"discussions/Week 2 - Types and HOF",title:"Discussion 2: Types and HOFs",description:"Welcome to the second discussion! This week you'll learn more about Type Signatures and Higher Order Functions.",source:"@site/materials/discussions/Week 2 - Types and HOF.md",sourceDirName:"discussions",slug:"/discussions/Week 2 - Types and HOF",permalink:"/materials/discussions/Week 2 - Types and HOF",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Discussion 1: Higher Order Functions and Setup",permalink:"/materials/discussions/Week 1 - Higher Order Functions & Setup"},next:{title:"Discussion 3: Lists",permalink:"/materials/discussions/Week 3 - Lists"}},l={},u=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"discussion-2-types-and-hofs"},"Discussion 2: Types and HOFs"),(0,r.kt)("p",null,"Welcome to the second discussion! This week you'll learn more about Type Signatures and Higher Order Functions."),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("p",null,"Download the lab slides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%202%20-%20No%20Solutions.pdf"},"here"),"."),(0,r.kt)("p",null,"The slides with solutions will be posted ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%202%20-%20Solutions.pdf"},"here")," after the last discussion of the day."),(0,r.kt)("p",null,"Download the starter code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/02-Types-and-HOF.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,r.kt)("p",null,"The solution file will be posted ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/lab2-solutions.ts"},"here")," after lab."),(0,r.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you need help installing ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,r.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,r.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,r.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After opening, run ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,r.kt)("h2",{id:"submitting"},"Submitting"),(0,r.kt)("p",null,"Use the following command to build a ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,r.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,r.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}d.isMDXComponent=!0}}]);