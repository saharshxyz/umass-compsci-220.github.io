"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:8},i="Discussion 8: Observables and Streams",o={unversionedId:"discussions/Week 8 - Observables and Streams",id:"discussions/Week 8 - Observables and Streams",title:"Discussion 8: Observables and Streams",description:"Welcome to the eighth discussion! This week you'll learn more about working with observables and streams.",source:"@site/materials/discussions/Week 8 - Observables and Streams.md",sourceDirName:"discussions",slug:"/discussions/Week 8 - Observables and Streams",permalink:"/materials/discussions/Week 8 - Observables and Streams",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Discussion 7: Streams",permalink:"/materials/discussions/Week 7 -Streams"},next:{title:"Guidelines",permalink:"/materials/category/guidelines"}},l={},u=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discussion-8-observables-and-streams"},"Discussion 8: Observables and Streams"),(0,a.kt)("p",null,"Welcome to the eighth discussion! This week you'll learn more about working with observables and streams."),(0,a.kt)("h2",{id:"materials"},"Materials"),(0,a.kt)("p",null,"Download the lab slides ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%208%20-%20No%20Solutions.pdf"},"here"),"."),(0,a.kt)("p",null,"The slides with solutions will be posted ",(0,a.kt)("a",{parentName:"p",href:"#"},"here")," after the last discussion of the day."),(0,a.kt)("p",null,"Download the starter code ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/08-observables-and-streams.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,a.kt)("p",null,"The solution file will be posted ",(0,a.kt)("a",{parentName:"p",href:"#"},"here")," after lab."),(0,a.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need help installing ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,a.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,a.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,a.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"After opening, run ",(0,a.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,a.kt)("h2",{id:"submitting"},"Submitting"),(0,a.kt)("p",null,"Use the following command to build a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,a.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}m.isMDXComponent=!0}}]);